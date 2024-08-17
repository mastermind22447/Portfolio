import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/layouts/projects/Projects";
import About from "./components/layouts/About";
import Presentations from "./components/layouts/presentation/Presentations";
import DataScience from "./components/layouts/datascience/DataScience";
import Home from "./components/layouts/home/Home";
import ProjectDetail from "./components/layouts/projects/ProjectDetail";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/datascience" element={<DataScience />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
