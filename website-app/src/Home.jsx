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
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function Home() {
  const tagLine = {
    fontFamily: "sans-serif",
    width: "100%", // Adjust the width of the text block
    whiteSpace: "pre-wrap",
    zIndex: 2, // Set a higher z-index for the image to be above the text
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "20%", // Adjust the top margin as needed
  };
  const containerStyle = {
    display: "flex",
    margin: "0%",
    flexDirection: "row",
    alignItems: "flex-start", // Center horizontally,
    height: "100vh", // Adjust the height as needed,
  };
  const videoContainerStyle = {
    flex: 1, // Fill remaining space
    height: "70%", // Match the height of the image
    position: "relative", // Add position relative
    display: "flex", // Use flexbox for centering the video
    justifyContent: "center", // Align to the right
    flexDirection: "column", // Align items vertically
    alignItems: "center",
    marginTop: "10%"
  };

  const videoStyle = {
    position: "absolute", // Add position absolute
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    height: "100%", // Match the height of the container
    width: "100%", // Adjust the width of the video
    zIndex: 2, // Set a higher z-index for the image to be above the text
    right: 0, // Adjust the right position to align the video on the right

  };

  const sourceStyle = {
    height: "100%",
    zIndex: 2,
    fontFamily: "sans-serif",
    marginTop: "50%", 
    marginRight: "10%"
  };

  const imageStyle = {
    height: "70%",
    width: "100%",
    opacity: 0.5, // Adjusted to maintain aspect ratio
    zIndex: 1, // Set a higher z-index for the image to be above the text
    position: "absolute", // Add position absolute
    left: 0, // Align the image to the left side
  };

  const btnContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "2%", // Add top margin to separate the button
    zIndex: 2,
    marginLeft: "5%",
  };
  const btnStyle = {
    textTransform: "unset !important",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#D81010",
    px: "25px",
    border: "2px solid black", // Add border style
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  };

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef();

  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = 26;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  // Check if the isPlaying state is stored in localStorage
  React.useEffect(() => {
    const storedIsPlaying = localStorage.getItem("isPlaying");
    if (storedIsPlaying !== null) {
      setIsPlaying(storedIsPlaying === "true");
    }
  }, []);

  // Update the stored isPlaying state in localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("isPlaying", isPlaying);
  }, [isPlaying]);

  return (
    <Grid container xs={12}>
      <div style={containerStyle}>
        <img src={homepage} style={imageStyle} />
        <Grid container xs={6} style={{ justifyContent: "flex-start" }}>
          <div style={tagLine}>
          <Slide direction="left">
    <div>
            <Typography
              className="page-title"
              variant="h2"
              color="black"
              sx={{
                fontSize: "2.78rem",
                fontWeight: 900,
                px: "5%",
                display: { xs: "none", sm: "block" },
              }}
            >
              Using cutting-edge technology to combat cardiovascular disease
            </Typography>
            </div>
  </Slide>
          </div>
          <div style={btnContainerStyle}>
            <Button endIcon={<ArrowForwardIosIcon />} sx={btnStyle}>
              LEARN MORE
            </Button>
          </div>
        </Grid>
        <Grid container xs={6} style={{ justifyContent: "flex-end" }}>
          <div style={videoContainerStyle}>
            <ReactPlayer
              onReady={onReady}
              ref={playerRef}
              playing={isPlaying}
              url={"/clinicVideo.mp4"}
              type="video/mp4"
              controls={true}
              style={videoStyle}
              muted
            />
            <Typography variant="h7" style={sourceStyle}>
              {" "}
              Source: CNN{" "}
            </Typography>
          </div>
        </Grid>
      </div>
    </Grid>
  );
}

export default Home;
