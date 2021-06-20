import { useCallback, useRef } from "react";
import { ICardState, IDataState, IInfoState } from "../Components/Main/types";
import { _fetch } from "../_fetch";

const useLoadOnScroll = (
  skipLoad: boolean,
  data: IDataState | null,
  setLoading: (loading: boolean) => void,
  setData: (card: any) => void,
  setCards: (data: any) => void,
  handleError: () => void
): any => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node) => {
      if (skipLoad) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.info?.next) {
          setLoading(true);
          _fetch(data.info.next || "")
            .then(
              ({
                info,
                results,
              }: {
                info: IInfoState;
                results: ICardState[];
              }) => {
                setData((prevState: IDataState) => ({
                  info,
                  results: [...prevState.results, ...results],
                }));
                setCards((prevState: ICardState[]) => [
                  ...prevState,
                  ...results,
                ]);
              }
            )
            .catch(() => handleError())
            .finally(() => setLoading(false));
        }
      });

      if (node) observer.current.observe(node);
    },
    [skipLoad]
  );

  return [lastItemRef];
};

export default useLoadOnScroll;
