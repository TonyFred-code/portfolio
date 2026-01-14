import { useEffect, useRef } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
});

export default function TopLoader() {
  const navigation = useNavigation();
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    const pathnameChanged = prevPathname.current !== location.pathname;

    if (pathnameChanged && navigation.state === "loading") {
      NProgress.start();
    }

    if (navigation.state === "idle") {
      NProgress.done();
    }

    prevPathname.current = location.pathname;
  }, [navigation.state, location.pathname]);

  return null;
}
