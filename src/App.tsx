import React from "react";
import withStyles from "react-jss";
import Main from "./Components/Main/Main";

const styles = (theme) => ({
  app: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(
      to right bottom,
      ${theme.o_colorPrimary}, ${theme.o_colorTertiary}
    )`,
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
