import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectImage from "./ProjectImage";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/portfolio/projects/${id}/`
        );
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h5" component="h2">
        {project.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {project.description}
      </Typography>
      <Grid container spacing={2}>
        {project.images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ProjectImage imageUrl={`http://localhost:8000${image.photos}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectDetail;
