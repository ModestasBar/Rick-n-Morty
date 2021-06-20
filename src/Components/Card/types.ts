import { ICardState } from "../Main/types";

export interface ICardProps {
  classes: { [key: string]: string };
  openModal: (data: ICardState) => void;
  data: ICardState;
  element?: null;
}
