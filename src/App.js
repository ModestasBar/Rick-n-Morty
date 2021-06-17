import { withStyles } from "react-jss";
import backgroundImage from "./assets/img/rick-and-morty2.jpeg";
import Main from "./Components/Main/Main";

const styles = (theme) => ({
  app: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(
      to right bottom,
      ${theme.o_colorMediumGreen}, ${theme.o_colorLightGreen}
    ), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
});

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <Main />
    </div>
  );
};

export default withStyles(styles)(App);
