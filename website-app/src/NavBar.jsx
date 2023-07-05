import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";



function NavBar() {
    return (
        <AppBar position="static" color='primary' component="nav">
           <Toolbar className="nav-bar-bar" sx={{ justifyContent: "space-between"}}>
              
                 <Button sx={{ px: "25px"}} >
                    Home
                 </Button>
                 <Button sx={{px: "25px"}}>
                    Our Vision
                 </Button>
                 <Button sx={{px: "25px"}}>
                    The Impact
                 </Button>
                 <Button sx={{px: "25px"}}>
                    Resources
                 </Button>
              
           </Toolbar>
        </AppBar>
    );
}

export default NavBar;