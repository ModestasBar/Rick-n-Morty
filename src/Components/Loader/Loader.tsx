import React from "react";
import withStyles, { useTheme } from "react-jss";
import ClipLoader from "react-spinners/ClipLoader";
import { ITheme } from "../../theme";
import { ILoaderProps } from "./types";

const styles = (theme: ITheme) => ({
  loaderBox: (props: ILoaderProps) => ({
    height: props.fullScreen ? "100vh" : "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.paddingLarge,
  }),
});

const Loader: React.FC<ILoaderProps> = ({ classes, loading, color, size }) => {
  const theme: ITheme = useTheme();

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
