import {
    IconButton, 
  Typography,
  Grid,
  Card,
  Stack,
  CardContent,
} from "@mui/material";
import group_pic from "./Photos/group_photo.jpg";
import test from "./Photos/test.jpg";
import test1 from "./Photos/test1.png";
import { motion } from "framer-motion";
import arohi from "./Photos/arohi.JPG";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import useGoogleSheets from "use-google-sheets";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Research() {
  const [selectedResearcher, setSelectedResearcher] = useState(false); // Initialize to false

  const { data, loading, error } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY, // "AIzaSyAeVW9HaC4CAdD_5z92zdvGOPjFXSBy-L4",
    sheetId: import.meta.env.VITE__GOOGLE_SHEET_ID, //"1s90HgOTT7_SPs9zh2LKqsmdNaPyXjWLpJI_OomJQqbc",
  });

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
  console.log(data[0].data[0].Name);

  const iconBtnStyle = {
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  };

  return (
    <Grid container spacing={2}>
      {data[0].data.map((researcher, index) => (
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
                marginLeft: "20%",
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
                fontSize: "2rem",
                fontWeight: 900,
                px: "5%",
                display: { xs: "none", sm: "block" },
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
            <Stack direction="row" spacing={2}  justifyContent="center" sx = {{marginBottom: "1%"}}>

                <IconButton
                  href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE="
                  target="_blank"
                  size="medium"
                  sx={iconBtnStyle}
                >
                  <LinkedInIcon sx={{ color: "#ffffff" }} />
                </IconButton>
                <IconButton
                  href="https://instagram.com/cwru.acmw?igshid=MWI4MTIyMDE="
                  target="_blank"
                  size="medium"
                  sx={iconBtnStyle}
                >
                  <MailOutlineIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </Stack>
            <Typography
              className="page-title"
              variant="h2"
              color="black"
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                px: "5%",
                display: { xs: "none", sm: "block" },
              }}
            >
              {selectedResearcher.Bio}
            </Typography>
          </DialogContent>
          </div>

        )}
      </Dialog>
    </Grid>
  );
}

export default Research;
