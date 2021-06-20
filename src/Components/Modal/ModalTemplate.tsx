import React, { Fragment, useEffect, useState } from "react";
import withStyles from "react-jss";
import { useLocalContext } from "../../localContext";
import { ITheme } from "../../theme";
import { _fetch } from "../../_fetch";
import Loader from "../Loader";
import { IModalDataState } from "./types";

const styles = (theme: ITheme) => ({
  modal: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    backgroundColor: theme.colorWhite,
    padding: theme.paddingLarge,
  },
  contentDescription: {
    minWidth: "25rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: `${theme.paddingLarge} 0`,
  },

  description: {
    width: "40%",
    textAlign: "start",
  },
  headingPrimary: {
    fontSize: "3rem",
    color: theme.colorPrimary,
  },
  headingSecondary: {
    fontSize: "2.3rem",
  },
  label: {
    fontSize: "1.1rem",
    letterSpacing: "1.5px",

    "& span": {
      fontSize: "1.6rem",
    },
  },
  close: {
    textTransform: "uppercase",
    color: theme.colorPrimary,
    backgroundColor: "transparent",
    width: "100%",
    margin: "0 auto",
    fontSize: "2rem",
    border: "none",
    padding: "1rem",
    transform: "translateY(1rem)",
  },
});

const ModalTemplate = ({ classes }: { classes: { [key: string]: string } }) => {
  const [data, setData] = useState<IModalDataState[] | null>(null);
  const {
    closeModal,
    modalData: {
      image,
      name,
      status,
      species,
      type,
      gender,
      location,
      origin,
      episode,
    },
    handleError,
  } = useLocalContext();

  useEffect(() => {
    Promise.all<IModalDataState>(episode.map((url: string) => _fetch(url)))
      .then((response) => {
        setData(response);
      })
      .catch(() => handleError());
  }, [episode, handleError]);

  if (!data) {
    return <Loader loading={true} fullScreen size={150} />;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <img
          src={image}
          alt="character avatar"
          className={classes.contentImage}
        />
        <h3 className={classes.headingPrimary}>{name}</h3>
        <div className={classes.contentDescription}>
          <div className={classes.description}>
            <h3 className={classes.headingSecondary}>General</h3>
            <p className={classes.label}>
              Name: <span>{name || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Status: <span>{status || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Species: <span>{species || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Type: <span>{type || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Gender: <span>{gender || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Origin: <span>{origin.name || "-"}</span>
            </p>
            <hr />
            <p className={classes.label}>
              Location: <span>{location.name || "-"}</span>
            </p>
          </div>
          <div className={classes.description}>
            <h3 className={classes.headingSecondary}>Episodes</h3>
            {data
              ? data.map(({ name, episode, id }, index) => (
                  <Fragment key={id}>
                    <p>
                      {name} ({episode})
                    </p>
                    {index + 1 !== data.length && <hr />}
                  </Fragment>
                ))
              : null}
          </div>
        </div>
        <hr />
        <button className={classes.close} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(ModalTemplate);
