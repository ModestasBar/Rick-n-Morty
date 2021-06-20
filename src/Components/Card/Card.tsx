import React from "react";
import withStyles from "react-jss";
import { ITheme } from "../../theme";
import { ICardProps } from "./types";

const styles = (theme: ITheme) => ({
  card: {
    width: "100%",
    backgroundColor: theme.colorTertiary,
    textAlign: "center",
    padding: theme.paddingLarge,
    position: "relative",
    transition: "ease all .2s",
    boxShadow: `0 .5rem 3.5rem ${theme.colorBlack}`,

    "&:active": {
      transform: "translateY(.3rem)",
      boxShadow: `0 .3rem 1.5rem ${theme.colorBlack}`,
    },
  },

  cardImage: {
    width: "100%",
    backgroundSize: "cover",
  },

  cardTitle: {
    marginTop: "2rem",
    fontSize: "2rem",
    textTransform: "uppercase",
    color: theme.colorPrimary,
  },
});

const Card: React.FC<ICardProps> = ({ classes, openModal, data, element }) => (
  <div className={classes.card} onClick={() => openModal(data)} ref={element}>
    <img
      className={classes.cardImage}
      src={data.image}
      alt="character avatar"
    />
    <div className={classes.cardTitle}>{data.name}</div>
  </div>
);

export default withStyles(styles)(Card);
