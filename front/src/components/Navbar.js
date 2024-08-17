import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Slideshow, BarChart, Info } from "@mui/icons-material"; // Import icons
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";

const pages = [
  { name: "Projects", icon: <Slideshow /> },
  { name: "Presentations", icon: <PresentToAllOutlinedIcon /> },
  { name: "DataScience", icon: <BarChart /> },
  { name: "About", icon: <Info /> },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Navigate hook for routing

  // Open the navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Close the navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Navigate to the selected page
  const handleNavPage = (page) => {
    navigate(`/${page.name.toLowerCase()}`);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Menu icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* Site title */}
          {/* Link to the home page */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
            }}
          >
            My Portfolio
          </Typography>

          {/* Navigation menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleNavPage(page)}>
                  {page.icon} {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
