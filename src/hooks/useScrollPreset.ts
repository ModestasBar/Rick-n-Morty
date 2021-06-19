import { useEffect, useRef } from "react";

const useScrollPreset = (dependencies) => {
  const scrollPosition = useRef();

  useEffect(() => {
    window.scrollTo(0, scrollPosition.current);
  }, [dependencies]);

  const saveScrollPosition = () => (scrollPosition.current = window.scrollY);

  return [saveScrollPosition];
};

export default useScrollPreset;
