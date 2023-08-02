import * as React from "react";
import { useState } from "react"; // Added the useState import
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "./photos/logo.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Added useState

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  const btnStyle = {
    textTransform: "unset !important",
    fontSize: isMobile ? "9px" : "23px", // Reduced font size for smaller buttons
    fontWeight: 200,
    fontFamily: "sans-serif",
    borderRadius: "0px",
    color: "white",
    padding: isPad ? "4px" : "16px", // Adjust padding for smaller buttons
    "&:hover": {
      color: "#000000",
      backgroundColor: "#F2F2F2",
    },
  };

  const logoStyle = {
    width: "400px", // Reduced width for a smaller logo
    height: "auto",
  };

  if (isPad) {
  }

  const WideMenuContent = () => (
    <Box display="flex" justifyContent="flex-end" flexGrow={2}>
      {" "}
      {/* Adjust justifyContent to move buttons to the right */}
      {isMobile && (
        <Button
          component={Link}
          to="/home"
          sx={{ ...btnStyle, fontSize: "11px", textTransform: "none" }}
        >
          Home
        </Button>
      )}
      <Button
        component={Link}
        to="/research"
        sx={{ ...btnStyle, textTransform: "none" }}
      >
        Research
      </Button>
      <Button
        component={Link}
        to="/about"
        sx={{ ...btnStyle, textTransform: "none" }}
      >
        About Us 
      </Button>
      <Button   component={Link}
        to="/news"
        sx={{ ...btnStyle, textTransform: "none" }}>News</Button>
      <Button sx={{ ...btnStyle, textTransform: "none" }}>Opportunities</Button>
    </Box>
  );

  const MobileDrawerContent = () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: "black" }}
    >
      <WideMenuContent />
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        {isMobile ? (
          <>
            <Box display="flex">
              <Button
                color="secondary"
                component={Link}
                to="/home"
                startIcon={
                  <img src={logo} alt="CIRC Logo" style={{ width: "70%" }} />
                }
              />
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: "white", fontSize: "35px" }} />
              </IconButton>
            </Box>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <MobileDrawerContent />
            </Drawer>
          </>
        ) : (
          <>
            <Box display="flex" flexGrow={1}>
              <Button
                color="secondary"
                component={Link}
                to="/home"
                startIcon={<img src={logo} alt="CIRC Logo" style={logoStyle} />}
              />
            </Box>
            <WideMenuContent />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
