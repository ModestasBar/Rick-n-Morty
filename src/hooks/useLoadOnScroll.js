import { useCallback, useRef } from "react";

const useLoadOnScroll = (skipLoad, callBack) => {
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (skipLoad) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callBack();
        }
      });

      if (node) observer.current.observe(node);
    },
    [skipLoad, callBack]
  );

  return [lastItemRef];
};

export default useLoadOnScroll;
