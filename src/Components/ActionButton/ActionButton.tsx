import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      position: "fixed",
      bottom: 20,
      zIndex: 5,
      right: 20
    }
  }
}));

export default function ActionButton() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <button
        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        onClick={() => {
          history.push("/new");
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </button>
    </div>
  );
}
