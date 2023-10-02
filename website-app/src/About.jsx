import {
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  Divider,
  Stack,
  CardContent,
  IconButton,
} from "@mui/material";
import test1 from "./Photos/test1.png";
import { motion } from "framer-motion";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import useGoogleSheets from "use-google-sheets";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function About() {
  function RenderBio({ bio }) {
    const paragraphs = bio
      .split("\n")
      .map((line, index) => <p key={index}>{line}</p>);

    return <div>{paragraphs}</div>;
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedResearcher, setSelectedResearcher] = useState(false); // Initialize to false
  const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);

  const { data, loading, error } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE__GOOGLE_SHEET_ID,
  });

  const handleSheetButtonClick = (sheetIndex) => {
    setSelectedSheetIndex(sheetIndex);
  };

  const handleCardClick = (researcher) => {
    setSelectedResearcher(researcher);
  };

  const handleCloseModal = () => {
    setSelectedResearcher(false); // Set back to false to close the modal
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const iconBtnStyle = {
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  };

  const imageStyle = {
    width: "100%",
    height: isMobile ? "40%" : "60%",
    opacity: 0.5, // Adjusted to maintain aspect ratio
    zIndex: 1, // Set a higher z-index for the image to be above the text
    position: "absolute", // Add position absolute
    left: 0, // Align the image to the left side
  };

  const hrLine = {
    width: "60%",
    marginRight: "40%",
    borderTop: "3px solid #000000",
    borderBottom: "3px solid #000000",
  };
  const tagLine = {
    fontFamily: "sans-serif",
    width: "100%", // Adjust the width of the text block
    whiteSpace: "pre-wrap",
    zIndex: 2, // Set a higher z-index for the image to be above the text
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: isMobile ? "20%" : "10%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start", // Center horizontally,
    justifyContent: "center",
    height: isMobile ? "40vh" : "60vh", // Adjust the height as needed,
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
        <img src={test1} style={imageStyle} />
        <div style={tagLine}>
          <Typography
            className="page-title"
            variant="h2"
            color="black"
            sx={{
              fontSize: {
                xs: "1.75rem", // Font size for extra-small screens (less than 600px)
                sm: "3.4rem", // Font size for small screens (600px and above)
              },
              fontWeight: 900,
              px: "6%",
            }}
          >
            About Us
            <hr style={hrLine} />
            <Slide direction="left">
              <div>
                We enable global innovation <br />
                through collaboration
              </div>
            </Slide>
          </Typography>
        </div>
        <Divider variant="middle" sx={{ zIndex: 2 }} />
      </div>
      <div style={containerText}>
        <Paper
          square
          elevation={2}
          sx={{
            background: "#D9D9D9",
            textAlign: "center",
            py: "20px",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Typography
            className="page-title"
            variant="h5"
            color="black"
            sx={{
              fontSize: {
                xs: "0.75rem", // Font size for extra-small screens (less than 600px)
                sm: "1.5rem", // Font size for small screens (600px and above)
              },
              fontWeight: 400,
              px: "3%",
            }}
          >
            Lead by our director, Dr. Christopher Nguyen, Ph.D., we foster a
            highly collaborative environment between engineers, scientists,
            physicians, and patients to enable rapid translation of these
            innovations to transform clinical practice across the globe.{" "}
            <br sx={{ lineHeight: "0.25%" }} />
            Our goals are achieved for the community through many
            next-generation methods including advanced multidimensional imaging,
            artificial intelligence/machine learning, 3D printing, bio-inspired
            robotics, biosensors, computer simulation, and bioinformatics.
          </Typography>
        </Paper>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="h2"
            color="black"
            sx={{
              fontSize: isMobile ? "0.9rem" : "1.8rem",
              fontWeight: 900,
              px: "5%",
              marginLeft: !isMobile ? "10%" : "0%",
            }}
            onClick={() => handleSheetButtonClick(0)} // Set the index for HomePage
          >
            Meet Our Team
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: "0.4%",
              marginLeft: "10%",
              backgroundColor: "#CE2F2F",
              "&:hover": {
                backgroundColor: "#000000",
              },
              fontSize: isMobile ? "0.6rem" : "1.3rem",
              whiteSpace: "nowrap", 
              overflow: "hidden",
              width: isMobile? "180px" : "250px",
              height: isMobile? "30px" : "100px"
            }}
            onClick={() => handleSheetButtonClick(1)} // Set the index for HomePage
          >
            Chris's Lab
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: "0.4%",
              marginLeft: "10%",
              backgroundColor: "#CE2F2F",
              "&:hover": {
                backgroundColor: "#000000",
              },
              fontSize: isMobile ? "0.6rem" : "1.3rem",
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              width: isMobile? "180px" : "250px",
              height: isMobile? "30px" : "100px"
            }}
            onClick={() => handleSheetButtonClick(2)} // Set the index for HomePage
          >
            David's Lab
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: "0.4%",
              marginLeft: "10%",
              backgroundColor: "#CE2F2F",
              "&:hover": {
                backgroundColor: "#000000",
              },
              fontSize: isMobile ? "0.6rem" : "1.3rem",
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              width: isMobile? "180px" : "250px",
              height: isMobile? "30px" : "100px"
            }}
          >
            Debbie's Lab
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {data[selectedSheetIndex].data.map((researcher, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Card
                onClick={() => handleCardClick(researcher)}
                sx={{
                  borderRadius: "50%",
                  width: "40vh",
                  height: "40vh",
                  marginTop: "20%",
                  textAlign: "center",
                  marginLeft: isMobile ? "5%" : "20%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={researcher.Photo} // Replace with the correct key for the photo URL in your data
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ marginTop: "7%", marginLeft: "5%", textAlign: "center" }}
            >
              {researcher.Name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ marginLeft: "5%", textAlign: "center" }}
            >
              {researcher.Role}
            </Typography>
          </Grid>
        ))}

        <Dialog open={Boolean(selectedResearcher)} onClose={handleCloseModal}>
          {selectedResearcher && (
            <div
              sx={{
                height: "100%",
                marginTop: "5%",
              }}
            >
              <DialogContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center", // Center the content vertically
                  height: "100%",
                  backgroundColor: "#E5E6E7", // Set the background color for the content area

                  // Set the container height to occupy the full dialog height
                }}
              >
                <div
                  style={{
                    width: "100%", // Adjust the width as needed
                    height: "100%", // Adjust the width as needed
                    paddingBottom: "90%", // Create a square container using padding
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={selectedResearcher.Photo}
                    alt="Researcher"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      right: "1",
                    }}
                  />
                </div>

                <Typography
                  className="page-title"
                  variant="h2"
                  color="black"
                  sx={{
                    fontSize: {
                      xs: "1.4rem", // Font size for extra-small screens (less than 600px)
                      sm: "2rem", // Font size for small screens (600px and above)
                      // Add more entries for other breakpoints if needed
                    },
                    fontWeight: 900,
                    px: "5%",
                  }}
                >
                  {selectedResearcher.Name}
                </Typography>
                <Typography
                  className="page-title"
                  variant="h2"
                  color="black"
                  sx={{
                    fontSize: "1.7rem",
                    fontWeight: 400,
                    px: "5%",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {selectedResearcher.Role}
                </Typography>
                <Typography
                  className="page-title"
                  variant="h2"
                  color="black"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    px: "5%",
                  }}
                >
                  <RenderBio bio={selectedResearcher.Bio} />
                </Typography>
              </DialogContent>
            </div>
          )}
        </Dialog>
      </Grid>
    </Container>
  );
}

export default About;
