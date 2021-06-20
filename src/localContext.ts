import { createContext, useContext } from "react";
import { ICardState } from "./Components/Main/types";

export type ContextType = {
  closeModal: () => void;
  handleError: () => void;
  modalData: ICardState;
};

const LocalContext = createContext<ContextType>({
  closeModal: () => null,
  handleError: () => null,
  modalData: {
    created: "",
    episode: [],
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    origin: { name: "", url: "" },
    name: "",
    species: "",
    status: "",
    type: "",
    url: "",
  },
});
export const useLocalContext = (): ContextType => useContext(LocalContext);
export const ContextProvider = LocalContext.Provider;

export default LocalContext;
