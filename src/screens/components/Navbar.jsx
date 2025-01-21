import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useScrollTrigger, Slide } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Research", "People", "Publications", "Education", "News", "Code", "Contact"];
const baseUrl = "/mlncdonders.github.io";

function Navbar() {
  let navigate = useNavigate();
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (page) => {
    if (page === "Code") {
      window.open("https://github.com/artcogsys", "_blank");
    } else {
      navigate(`/${page.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        style={{
          backgroundColor: "#510648", // Hardcoded primary color
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
        position="fixed"
      >
        <Container style={{ width: "100vw", padding: "0 2vw" }} maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={`${baseUrl}/`}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#ff4081", // Hardcoded accent color
                },
              }}
            >
              ML & Neural Computing
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#510648", // Hardcoded primary color
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "#ff4081", // Hardcoded accent color
                        },
                      }}
                      onClick={() => handleNavigate(page)}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href={`${baseUrl}/`}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
              }}
            >
              ML & Neural Computing
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigate(page)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    fontWeight: 500,
                    textTransform: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#ff4081", // Hardcoded accent color
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default Navbar;