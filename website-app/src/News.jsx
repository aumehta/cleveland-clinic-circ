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
import useGoogleSheets from "use-google-sheets";
import AnnouncementIcon from "@mui/icons-material/Announcement";

function News() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const { data, loading, error } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE__GOOGLE_SHEET_ID_NEWS,
  });
  const rows =
    data?.flatMap((item) =>
      item.data?.map((rowItem) => ({
        date: rowItem.Date,
        topic: rowItem.Topic,
        information: rowItem.Information,
        photo: rowItem.Photo,
      }))
    ) ?? [];

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
    borderTop: isMobile ? "1px solid #000000" : "3px solid #000000",
    borderBottom: isMobile ? "1px solid #000000" : "3px solid #000000",
  };

  const hrLineContainer = {
    width: isMobile ? "40%" : "30%",
    borderTop: isMobile ? "1px solid #000000" : "3px solid #000000",
    borderBottom: isMobile ? "1px solid #000000" : "3px solid #000000",
    marginRight: "80%",
    marginLeft: "5%",
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
    marginTop: isMobile ? "20%" : "10%", // Adjust the top margin as needed
  };

  const containerText = {
    fontFamily: "sans-serif",
    whiteSpace: "pre-wrap",
    zIndex: 2, // Set a higher z-index for the image to be above the text
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#D9D9D9",
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
              <div>Cardiovascular Innovation Research Center</div>
            </Slide>
          </Typography>
        </div>
        <Divider variant="middle" sx={{ zIndex: 2 }} />
      </div>
      <div style={containerText}>
        <Grid container alignItems="flex-start" justifyContent="flex-start">
          <Typography
            variant="h2"
            color="black"
            sx={{
              fontSize: {
                xs: "1.5rem", // Font size for extra-small screens (less than 600px)
                sm: "3rem", // Font size for small screens (600px and above)
              },
              fontWeight: 900,
              py: "1%",
              marginLeft: "5%",
              marginTop: "2%",
            }}
          >
            Featured News
          </Typography>
        </Grid>
        <hr style={hrLineContainer} />
        <Grid container spacing={1}>
          {rows.map((researcher, index) => (
            <Grid item key={index}>
              <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }}>
                <Paper
                  square
                  elevation={2}
                  sx={{
                    background: "#000000",
                    textAlign: "center",
                    p: "18px",
                    marginTop: "3%",
                    marginBottom: "3%",
                    padding: "2%",
                    marginLeft: "5%",
                    //width: isMobile || isPad || isTablet ? "20rem" : "80rem",
                    //height: isMobile || isPad || isTablet ? "5rem" : "20rem",
                    justifyContent: "center",
                  }}
                >
                  <Grid>
                    <Typography
                      className="page-title"
                      variant="h3"
                      color="white"
                      sx={{
                        fontSize: {
                          xs: "0.75rem", // Font size for extra-small screens (less than 600px)
                          sm: "2.0rem", // Font size for small screens (600px and above)
                        },
                        fontWeight: 600,
                        px: "5%",
                        fontFamily: "sans-serif",
                        textDecoration: 'underline'
                      }}
                    >
                      {researcher.topic}
                    </Typography>
                    <br/>
                    <Typography
                      className="page-title"
                      variant="h5"
                      color="white"
                      sx={{
                        fontSize: {
                          xs: "0.4rem", // Font size for extra-small screens (less than 600px)
                          sm: "1.5rem", // Font size for small screens (600px and above)
                        },
                        fontFamily: "sans-serif",
                      }}
                    >
                      {researcher.information}
                    </Typography>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default News;
