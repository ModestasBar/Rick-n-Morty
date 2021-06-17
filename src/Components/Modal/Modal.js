import ModalTemplate from "./ModalTemplate";
import { withStyles } from "react-jss";

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
};

const Modal = ({ classes, children }) => {
  return (
    <div className={classes.overlay}>
      <ModalTemplate>{children}</ModalTemplate>
    </div>
  );
};

export default withStyles(styles)(Modal);
