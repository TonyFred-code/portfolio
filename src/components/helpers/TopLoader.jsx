import { useEffect, useRef } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

export default function TopLoader() {
  const navigation = useNavigation();
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const isLoadingRef = useRef(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      if (navigation.location?.pathname !== prevLocation.current) {
        NProgress.start();
        isLoadingRef.current = true;
      }
    } else if (navigation.state === "idle") {
      if (isLoadingRef.current) {
        NProgress.done();
        isLoadingRef.current = false;
      }
      prevLocation.current = location.pathname;
    }
  }, [navigation.state, location.pathname, navigation.location]);

  return null;
}
