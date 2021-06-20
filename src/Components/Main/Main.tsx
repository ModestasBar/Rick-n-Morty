import React, { useEffect, useState } from "react";
import withStyles from "react-jss";
import { ContextProvider } from "../../localContext";
import Card from "../Card";
import Modal from "../Modal";
import { searchByName } from "./utils";
import useScrollPreset from "../../hooks/useScrollPreset";
import useLoadOnScroll from "../../hooks/useLoadOnScroll";
import { _fetch } from "../../_fetch";
import Loader from "../Loader";
import { ICardState, IDataState } from "./types";
import { ITheme } from "../../theme";

const styles = (theme: ITheme) => ({
  filterContainer: {
    padding: "2rem 2rem 0 2rem",
    textAlign: "center",
  },

  filter: {
    maxWidth: "30rem",
    padding: theme.paddingLarge,
    textDecoration: "none",
    border: "none",
    fontSize: "1.6rem",
    boxShadow: `0 1rem 2rem ${theme.o_colorBlack}`,
    backgroundColor: theme.o_colorTertiary,
    color: theme.colorBlack,
  },

  cardContainer: {
    maxWidth: "114rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr));",
    gridGap: theme.gutter,
    margin: "0 auto",
    padding: theme.paddingLarge,
    position: "relative",
  },

  errorMessage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const BASE_URL = "https://rickandmortyapi.com/api/character";

const Main = ({ classes }: { classes: { [key: string]: string } }) => {
  const [data, setData] = useState<IDataState | null>(null);
  const [cards, setCards] = useState<ICardState[] | null>(null);
  const [modalData, setModalData] = useState<ICardState | null>(null);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = (value: string) => {
    const results = data?.results;

    setSearchName(value);
    if (results) {
      setCards(searchByName(results, value));
    }
  };
  const handleError = () => setError(true);
  const closeModal = () => setModalData(null);
  const openModal = (cardData: ICardState) => setModalData(cardData);

  const [saveScrollPosition] = useScrollPreset(modalData);
  const [lastItemRef] = useLoadOnScroll(
    Boolean(searchName || loading || !data?.info?.next),
    data,
    setLoading,
    setData,
    setCards,
    handleError
  );

  useEffect(() => {
    setLoading(true);
    _fetch(BASE_URL)
      .then((response) => {
        setData(response);
        setCards(response.results);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <h1 className={classes.errorMessage}>
        We are sorry... Something went wrong ;(
      </h1>
    );
  }

  if (!cards) {
    return <Loader loading={true} fullScreen />;
  }

  return !modalData ? (
    <>
      <div className={classes.filterContainer}>
        <input
          value={searchName}
          className={classes.filter}
          placeholder="Looking for..."
          onChange={({ target: { value } }) => onSearch(value)}
        />
      </div>
      <div className={classes.cardContainer}>
        {cards.map((character, index) => {
          const props = {
            openModal: (character: ICardState) => {
              openModal(character);
              saveScrollPosition();
            },
            data: character,
            key: character.id,
          };
          return cards.length === index + 1 ? (
            <Card {...props} element={lastItemRef} />
          ) : (
            <Card {...props} />
          );
        })}
      </div>

      <Loader loading={loading} />
    </>
  ) : (
    <ContextProvider value={{ closeModal, modalData, handleError }}>
      <Modal />
    </ContextProvider>
  );
};

export default withStyles(styles)(Main);
