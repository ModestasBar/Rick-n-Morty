import { withStyles } from "react-jss";
import rickAndMorty from "../../assets/img/rick-and-morty1.jpeg";

const styles = (theme) => ({
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
    padding: "2rem",
  },
  contentImage: {
    width: "25rem",
  },
  contentDescription: {
    minWidth: "25rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem 0",
  },

  description: {
    textAlign: "start",
    marginRight: "1rem",
  },
  heading: {
    fontSize: "3rem",
  },
  label: {
    fontSize: "1.5rem",
  },
  close: {
    textTransform: "uppercase",
    color: theme.colorDarkGreen,
    backgroundColor: "transparent",
    width: "100%",
    margin: "0 auto",
    fontSize: "2rem",
    border: "none",
    padding: "1rem",
    transform: "translateY(1rem)",
  },
});

const ModalTemplate = ({ classes }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <img src={rickAndMorty} alt="avatar" className={classes.contentImage} />
        <div className={classes.contentDescription}>
          <div className={classes.description}>
            <h3 className={classes.heading}>General</h3>
            <p className={classes.label}>
              Name: <span>Rick Sanchez</span>
            </p>
            <p className={classes.label}>
              Status: <span>Alive</span>
            </p>
            <p className={classes.label}>
              Species: <span>Human</span>
            </p>
            <p className={classes.label}>
              Type: <span>Rick</span>
            </p>
            <p className={classes.label}>
              Gender: <span>Male</span>
            </p>
          </div>
          <div className={classes.description}>
            <h3 className={classes.heading}>General</h3>
            <p className={classes.label}>
              Name: <span>Rick Sanchez</span>
            </p>
            <p className={classes.label}>
              Status: <span>Alive</span>
            </p>
            <p className={classes.label}>
              Species: <span>Human</span>
            </p>
            <p className={classes.label}>
              Type: <span>Rick</span>
            </p>
            <p className={classes.label}>
              Gender: <span>Male</span>
            </p>
          </div>
          <div className={classes.description}>
            <h3 className={classes.heading}>General</h3>
            <p className={classes.label}>
              Name: <span>Rick Sanchez</span>
            </p>
            <p className={classes.label}>
              Status: <span>Alive</span>
            </p>
            <p className={classes.label}>
              Species: <span>Human</span>
            </p>
            <p className={classes.label}>
              Type: <span>Rick</span>
            </p>
            <p className={classes.label}>
              Gender: <span>Male</span>
            </p>
          </div>
          <div className={classes.description}>
            <h3 className={classes.heading}>General</h3>
            <p className={classes.label}>
              Name: <span>Rick Sanchez</span>
            </p>
            <p className={classes.label}>
              Status: <span>Alive</span>
            </p>
            <p className={classes.label}>
              Species: <span>Human</span>
            </p>
            <p className={classes.label}>
              Type: <span>Rick</span>
            </p>
            <p className={classes.label}>
              Gender: <span>Male</span>
            </p>
          </div>
        </div>
        <hr />
        <button className={classes.close}>Close</button>
      </div>
    </div>
  );
};

export default withStyles(styles)(ModalTemplate);
