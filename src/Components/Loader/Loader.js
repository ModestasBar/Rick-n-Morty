import withStyles, { useTheme } from "react-jss";
import ClipLoader from "react-spinners/ClipLoader";

const styles = (theme) => ({
  loaderBox: (props) => ({
    height: props.fullScreen ? "100vh" : "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.paddingLarge,
  }),
});

const Loader = ({ classes, loading, color, size }) => {
  const theme = useTheme();

  return (
    <div className={classes.loaderBox}>
      <ClipLoader
        color={color || theme.colorPrimary}
        loading={loading}
        size={size || 75}
      />
    </div>
  );
};

export default withStyles(styles)(Loader);
