import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ActionAreaCard = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/projects/${project.id}/`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:8000${project.images[0].photos}`}
            alt={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActionAreaCard;
