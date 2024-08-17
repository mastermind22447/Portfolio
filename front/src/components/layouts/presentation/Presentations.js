import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const Presentations = () => {
  const [presentations, setPresentations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/presentations/")
      .then((res) => res.json())
      .then((data) => {
        setPresentations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load presentations.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Presentations
      </Typography>
      <Typography variant="h6" gutterBottom>
        Here you can find a collection of presentations given by Dr. Hamid Reza
        Esmaeillou on various topics related to architecture.
      </Typography>
      <Grid container spacing={4}>
        {presentations.map((presentation) => (
          <Grid item xs={12} sm={6} md={4} key={presentation.id}>
            <Card>
              <CardActionArea
                component="a"
                href={presentation.video}
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    presentation.photo || "https://via.placeholder.com/150"
                  }
                  alt={presentation.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {presentation.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {presentation.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Presentations;
