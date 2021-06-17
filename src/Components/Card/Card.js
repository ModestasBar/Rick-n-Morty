import { withStyles } from "react-jss";
import testImg from "../../assets/img/rick-and-morty.jpeg";

const styles = (theme) => ({
  card: {
    width: "100%",
    backgroundColor: theme.colorDarkGreen,
    textAlign: "center",
    padding: "2rem",
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
    background: `linear-gradient(to right, ${theme.colorMediumGreen}, ${theme.colorLightGreen})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
});

const Card = ({ classes }) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardImage} src={testImg} alt="character avatar" />
      <div className={classes.cardTitle}>character name</div>
    </div>
  );
};

export default withStyles(styles)(Card);
