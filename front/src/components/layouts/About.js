import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import profile from "../../components/assets/Images/profile.jpg";

const About = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Dr. Esmaeillou "
              src={profile}
              sx={{ width: 200, height: 200, mx: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3" gutterBottom>
              Dr. Hamid Reza Esmaeillou , PhD
            </Typography>
            <Typography variant="h5" gutterBottom>
              Biography
            </Typography>
            <Typography paragraph>
              Dr. Hamid Reza Esmaeillou is a renowned architect with over 20
              years of experience in the field. He earned his PhD in
              Architecture from the prestigious XYZ University and has worked
              with top firms worldwide.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Design Philosophy
            </Typography>
            <Typography paragraph>
              Dr. Esmaeillou believes in creating sustainable and user-centric
              designs that enhance the quality of life. His work reflects a
              blend of innovation and tradition, aiming to create spaces that
              inspire and function seamlessly.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Achievements and Awards
            </Typography>
            <Typography paragraph>
              Dr. Esmaeillou has received numerous awards, including the ABC
              Award for Sustainable Architecture and the XYZ Design Excellence
              Award. He has also published several research papers and articles
              in renowned architectural journals.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography paragraph>Email: hr.esmaeillou@gmail.com</Typography>
            <Typography paragraph>Phone: (123) 456-7890</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
