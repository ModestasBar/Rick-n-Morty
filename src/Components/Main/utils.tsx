import { ICardState } from "./types";

export const searchByName = (
  cards: ICardState[],
  value: string
): ICardState[] =>
  cards && !!value.trim()
    ? cards.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    : cards;
