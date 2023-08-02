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


function Research() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isPad = useMediaQuery(theme.breakpoints.down("md"));

    const containerStyle = {
        display: "flex",
        margin: "0%",
        flexDirection: "row",
        alignItems: isMobile ? "flex-center" : "flex-start", // Center horizontally,
        height: isMobile ? "70vh" : "60vh", // Adjust the height as needed,
      };

      const hrLine = {
        width: "50%",
        marginRight: "40%",
        borderTop: "3px solid #000000",
        borderBottom: "3px solid #000000",
      };

      const imageStyle = {
        height: isMobile ? "70%" : "60%",
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
        marginTop: "10%", // Adjust the top margin as needed
      };
  return (
    <Container maxWidth="xl">

      </Container> 
  );
}

export default Research;
