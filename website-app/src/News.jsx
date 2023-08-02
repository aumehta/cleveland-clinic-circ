import Button from "@mui/material/Button";
import * as React from "react";
import homepage from "./Photos/homepage.jpg";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  Divider,
  Stack,
  CardContent,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import researchpage from "./Photos/researchpage.png";


function News() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isPad = useMediaQuery(theme.breakpoints.down("md"));

    const containerStyle = {
        display: "flex",
        margin: "0%",
        flexDirection: "row",
        alignItems: isMobile ? "flex-center" : "flex-start", // Center horizontally,
        height: isMobile ? "40vh" : "60vh", // Adjust the height as needed,
      };

      const hrLine = {
        width: "60%",
        marginRight: "40%",
        borderTop: "3px solid #000000",
        borderBottom: "3px solid #000000",
      };

      const imageStyle = {
        height: isMobile ? "40%" : "60%",
        width: "100%",
        opacity: 0.8, // Adjusted to maintain aspect ratio
        zIndex: 1, // Set a higher z-index for the image to be above the text
        position: "absolute", // Add position absolute
        left: 0, // Align the image to the left side
      };

      const tagLine = {
        fontFamily: "sans-serif",
        width: "100%", // Adjust the width of the text block
        whiteSpace: "pre-wrap",
        zIndex: 2, // Set a higher z-index for the image to be above the text
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: isMobile? "20%" : "10%", // Adjust the top margin as needed
      };
  return (
    <Container maxWidth="xl">
      <div style={containerStyle}>
        <img src={researchpage} style={imageStyle} />
        <div style={tagLine}>
          <Typography
            className="page-title"
            variant="h2"
            color="black"
            sx={{
              fontSize: {
                xs: "1.5rem", // Font size for extra-small screens (less than 600px)
                sm: "3rem", // Font size for small screens (600px and above)
              },
              fontWeight: 900,
              px: "6%",
            }}
          >
            News & Updates 
            <hr style={hrLine} />
            <Slide direction="left">
              <div>
              Cardiovascular Innovation Research Center 
              </div>
            </Slide>
          </Typography>
        </div>
        <Divider variant="middle" sx={{ zIndex: 2 }} />
      </div>
      </Container> 
  );
}

export default News;