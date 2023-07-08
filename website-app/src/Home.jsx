import Button from "@mui/material/Button";
import * as React from "react";
import homepage from "./Photos/homepage.jpg";
import group_pic from "./Photos/group_pic.jpeg";
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

function Home() {
  const tagLine = {
    fontFamily: "sans-serif",
    transform: "translate(10%, 20%)", // Adjust the text position using transform
    width: "40%", // Adjust the width of the text block
    whiteSpace: "pre-wrap",
    zIndex: 2, // Set a higher z-index for the image to be above the text
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    margin: "0%",
    overflow: "hidden", // Hide any content that extends beyond the container
    height: "100vh",
  };
  const videoContainerStyle = {
    flex: 1, // Fill remaining space
    height: "65%", // Match the height of the image
    position: "relative", // Add position relative
    display: "flex", // Use flexbox for centering the video
    justifyContent: "flex-end", // Align to the right
    alignItems: "flex-end", // Align to the top
    flexDirection: "column", // Align items vertically
  };

  const videoStyle = {
    position: "absolute", // Add position absolute
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    height: "100%", // Match the height of the container
    width: "100%", // Adjust the width of the video
    transform: "translate(25%,25%)", // Move the video 50% to the right
    zIndex: 2, // Set a higher z-index for the image to be above the text
  };

  const sourceStyle = {
    position: "absolute", // Add position absolute
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    height: "100%", // Match the height of the container
    width: "100%", // Adjust the width of the video
   transform: "translate(50%,95%)", // Move the video 50% to the right
    zIndex: 2, // Set a higher z-index for the image to be above the text
    fontFamily: "sans-serif",

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
    marginTop: "20px", // Add top margin to move the button lower
    transform: "translate(5%, 20%)", // Adjust the text position using transform
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
      backgroundColor: "#FFC582",
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
    <div>
      <div style={containerStyle}>
        <div style={tagLine}>
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
          <div style={btnContainerStyle}>
            <Button endIcon={<ArrowForwardIosIcon />} sx={btnStyle}>
              LEARN MORE
            </Button>
          </div>
        </div>
        <img src={homepage} style={imageStyle} />
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
          <Typography variant = "h7" style = {sourceStyle} > Source: CNN </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;

