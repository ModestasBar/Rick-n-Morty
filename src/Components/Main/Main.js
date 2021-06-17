import { withStyles } from "react-jss";
import Card from "../Card";
import Modal from "../Modal";

const styles = (theme) => ({
  filterContainer: {
    padding: "2rem 2rem 0 2rem",
    textAlign: "center",
  },

  filter: {
    padding: "2rem",
    textDecoration: "none",
    border: "none",
    fontSize: "1.6rem",
    boxShadow: `0 1rem 2rem ${theme.o_colorBlack}`,
    backgroundColor: theme.o_colorLightGreen,
    color: theme.colorBlack,
  },

  cardContainer: {
    maxWidth: "114rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr));",
    gridGap: theme.gutter,
    margin: "0 auto",
    padding: "2rem",
    position: "relative",
  },
});

const Main = ({ classes }) => {
  return (
    <>
      <div className={classes.filterContainer}>
        <input className={classes.filter} placeholder="Search by name..." />
      </div>
      <div className={classes.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Modal />
    </>
  );
};

export default withStyles(styles)(Main);
