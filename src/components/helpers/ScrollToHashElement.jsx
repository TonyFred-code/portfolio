import { string } from "prop-types";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement({
  behavior = "auto",
  initialBehavior = "auto",
  inline = "nearest",
  block = "start",
}) {
  const location = useLocation();
  const [hash, setHash] = useState(window.location.hash);
  const [count, setCount] = useState(0);
  const originalListeners = useRef({});

  const [firstRun, setFirstRun] = useState(true);
  useEffect(() => setFirstRun(false), []);

  // Update hash when React Router location changes
  useEffect(() => {
    setHash(location.hash || window.location.hash);
    setCount((count) => count + 1);
  }, [location]);

  useEffect(() => {
    const handleLocationChange = () => {
      setHash(window.location.hash);
      setCount((count) => count + 1);
    };

    const onPopState = () => {
      window.dispatchEvent(new Event("locationchange"));
    };

    const addWindowListeners = () => {
      originalListeners.current.pushState = window.history.pushState;
      originalListeners.current.replaceState = window.history.replaceState;

      window.history.pushState = function (...args) {
        const result = originalListeners.current.pushState.apply(this, args);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return result;
      };

      window.history.replaceState = function (...args) {
        const result = originalListeners.current.replaceState.apply(this, args);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return result;
      };

      window.addEventListener("popstate", onPopState);
      window.addEventListener("locationchange", handleLocationChange);
    };

    const removeWindowListeners = () => {
      window.history.pushState = originalListeners.current.pushState;
      window.history.replaceState = originalListeners.current.replaceState;
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("locationchange", handleLocationChange);
    };

    addWindowListeners();
    return removeWindowListeners;
  }, []);

  useLayoutEffect(() => {
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: firstRun ? initialBehavior : behavior,
          inline: inline,
          block: block,
        });
      }
    }
  }, [hash, count, firstRun, inline, block, behavior, initialBehavior]);

  return null;
}

ScrollToHashElement.propTypes = {
  behavior: string,
  initialBehavior: string,
  inline: string,
  block: string,
};
