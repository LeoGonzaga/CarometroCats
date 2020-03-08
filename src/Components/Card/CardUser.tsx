import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import placeholder from "../../Assets/placeholder.jpeg";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    marginBottom: 10,
  }
});

export default function CardUser() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{margin:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={placeholder}
          title="Nome do aluno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dinão
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
