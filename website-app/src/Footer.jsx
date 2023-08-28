import Button from "@mui/material/Button";
import * as React from "react";
import homepage from "./Photos/homepage.jpg";
import ReactPlayer from "react-player";
import clevelandLogo from "./Photos/clinicImage-removebg-preview.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Card,
  Divider,
  Stack,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const iconBtnStyle = {
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#7954A1",
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#000000", py: "1%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "sans-serif",
                 fontSize: {
                    xs: "0.8rem", // Font size for extra-small screens (less than 600px)
                    sm: "1.2rem", // Font size for small screens (600px and above)
                 }
                }}
              >
                LOCATION
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: {
                    xs: "0.7rem", // Font size for extra-small screens (less than 600px)
                    sm: "1rem", // Font size for small screens (600px and above)
                  }}}>
                9500 Euclid Ave.Cleveland, OH 44195
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="center"sx = {{                 fontSize: {
                    xs: "0.7rem", // Font size for extra-small screens (less than 600px)
                    sm: "1rem", // Font size for small screens (600px and above)
                  }}}>
                Cardiovascular Innovation <br/> 
                Research Center
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Stack direction="row" spacing={2}  justifyContent="center">
                <IconButton
                  href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE="
                  target="_blank"
                  size="medium"
                  sx={iconBtnStyle}
                >
                  <FacebookIcon sx={{ color: "#000000" }} />
                </IconButton>

                <IconButton
                  href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE="
                  target="_blank"
                  size="medium"
                  sx={iconBtnStyle}
                >
                  <LinkedInIcon sx={{ color: "#000000" }} />
                </IconButton>
                <IconButton
                  href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE="
                  target="_blank"
                  size="medium"
                  sx={iconBtnStyle}
                >
                  <TwitterIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" align="center" sx = {{                 fontSize: {
                    xs: "0.7rem", // Font size for extra-small screens (less than 600px)
                    sm: "1rem", // Font size for small screens (600px and above)
                  }}}>
                  (216) 636-5373 <br />
                  CIRC@ccf.org
                </Typography>
          </Grid>
          </Grid> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
