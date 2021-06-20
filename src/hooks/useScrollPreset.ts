import { useEffect, useRef } from "react";
import { ICardState } from "../Components/Main/types";

const useScrollPreset = (dependencies: ICardState | null): [() => void] => {
  const scrollPosition = useRef<number | null>(null);

  useEffect(() => {
    if (scrollPosition.current) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [dependencies]);

  const saveScrollPosition = () => {
    scrollPosition.current = window.scrollY;
  };

  return [saveScrollPosition];
};

export default useScrollPreset;
