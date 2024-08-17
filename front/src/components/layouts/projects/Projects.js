import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ActionAreaCard from "../../common/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // console.log("projects photo", projects);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <h1>Projects</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            alignItems="center"
          >
            {projects.map((project) => (
              <Grid item key={project.id} xs="auto" sm="auto" md="auto">
                <ActionAreaCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
