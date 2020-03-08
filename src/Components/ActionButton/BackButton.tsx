import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import BackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      position: "fixed",
      top: 20,
      zIndex: 5,
      left: 20
    }
  }
}));

export default function BackButton() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <button
        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        onClick={() => {
          history.push("/");
        }}
      >
        <Fab color="primary" aria-label="add">
          <BackIcon />
        </Fab>
      </button>
    </div>
  );
}
