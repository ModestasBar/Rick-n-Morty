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

const styles = (theme) => ({
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

const Main = ({ classes }) => {
  const [data, setData] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = (value) => {
    setSearchName(value);
    setCharacters(searchByName(data.results, value));
  };
  const handleError = (e) => setError(true);
  const closeModal = () => setModalData(null);
  const openModal = (cardData) => setModalData(cardData);

  const [saveScrollPosition] = useScrollPreset(modalData);
  const [lastItemRef] = useLoadOnScroll(
    searchName || loading || !data?.info?.next,
    () => {
      setLoading(true);
      _fetch(data.info.next)
        .then(({ info, results }) => {
          setData((prevState) => ({
            info,
            results: [...prevState.results, ...results],
          }));
          setCharacters((prevState) => [...prevState, ...results]);
        })
        .catch((e) => handleError(e))
        .finally(() => setLoading(false));
    }
  );

  useEffect(() => {
    setLoading(true);
    _fetch(BASE_URL)
      .then((response) => {
        setData(response);
        setCharacters(response.results);
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

  if (!characters) {
    return <Loader loading={true} fullScreen />;
  }

  return (
    <ContextProvider value={{ closeModal, modalData, handleError }}>
      {!modalData ? (
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
            {characters.map((character, index) => {
              const props = {
                openModal: (character) => {
                  openModal(character);
                  saveScrollPosition();
                },
                data: character,
                key: character.id,
              };
              return characters.length === index + 1 ? (
                <Card {...props} reference={lastItemRef} />
              ) : (
                <Card {...props} />
              );
            })}
          </div>

          <Loader loading={loading} />
        </>
      ) : (
        <Modal />
      )}
    </ContextProvider>
  );
};

export default withStyles(styles)(Main);
