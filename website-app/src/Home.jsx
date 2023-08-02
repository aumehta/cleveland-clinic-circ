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
import { useScroll, animated } from '@react-spring/web'

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollYProgress } = useScroll()


  const tagLine = {
    fontFamily: "sans-serif",
    width: "100%", // Adjust the width of the text block
    whiteSpace: "pre-wrap",
    zIndex: 2, // Set a higher z-index for the image to be above the text
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "20%", // Adjust the top margin as needed
  };
  const containerStyle = {
    display: "flex",
    margin: "0%",
    flexDirection: "row",
    alignItems: isMobile ? "flex-center" : "flex-start", // Center horizontally,
    height: isMobile ? "70vh" : "60vh", // Adjust the height as needed,
  };
  const videoContainerStyle = {
    position: "relative", // Add position relative
    paddingTop: "56.25%", // 16:9 aspect ratio (height/width = 9/16)
    marginTop: "5%",
  };

  const videoContainerStyleMobile = {
    position: "relative", // Add position relative
    paddingTop: "56.25%", // 16:9 aspect ratio (height/width = 9/16)
    paddingBottom: "56.25%", // 16:9 aspect ratio (height/width = 9/16)
  };

  const videoStyle = {
    position: "absolute", // Add position absolute
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    width: "100%", // Adjust the width to fill the container
    height: "100%", // Adjust the height to fill the container
    zIndex: 2, // Set a higher z-index for the image to be above the text
  };

  const videoStyleMobile = {
    position: "absolute", // Add position absolute
    top: 0, // Align the video to the top of the container
    left: 0, // Align the video to the left of the container
    width: "60%", // Adjust the width to fill the container
    height: "100%", // Adjust the height to fill the container
    zIndex: 2, // Set a higher z-index for the image to be above the text
    maxWidth: "100%", // Set a maximum width to fit the screen width of mobile devices
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

  const sourceStyle = {
    height: "100%",
    zIndex: 2,
    fontFamily: "sans-serif",
    marginTop: "60%",
    marginRight: "10%",
  };

  const imageStyle = {
    height: isMobile ? "70%" : "60%",
    width: "100%",
    opacity: 0.5, // Adjusted to maintain aspect ratio
    zIndex: 1, // Set a higher z-index for the image to be above the text
    position: "absolute", // Add position absolute
    left: 0, // Align the image to the left side
  };

  const btnContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "4%", // Add top margin to separate the button
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

  if (isPad) {
    containerStyle.height = "90vh";
    imageStyle.height = "90%";
    videoContainerStyleMobile.marginTop = "10%";
  }

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
    <Grid container>
      <Grid item xs={12} md={6}>
        <Grid item sx={containerStyle}>
          <img src={homepage} style={imageStyle} />
          <div style={tagLine}>
            <Slide direction="left">
              <div>
                <Typography
                  className="page-title"
                  variant="h2"
                  color="black"
                  sx={{
                    fontSize: {
                      xs: "1.75rem", // Font size for extra-small screens (less than 600px)
                      sm: "2.78rem", // Font size for small screens (600px and above)
                      // Add more entries for other breakpoints if needed
                    },
                    fontWeight: 900,
                    px: "5%",
                  }}
                >
                  Using cutting-edge technology to combat cardiovascular disease
                </Typography>
              </div>
            </Slide>
            <div style={btnContainerStyle}>
              <Button endIcon={<ArrowForwardIosIcon />} sx={btnStyle}>
                LEARN MORE
              </Button>
            </div>
            {(isMobile || isPad) && (
              <div style={videoContainerStyleMobile}>
                <ReactPlayer
                  onReady={onReady}
                  ref={playerRef}
                  playing={isPlaying}
                  url={"/clinicVideo.mp4"}
                  type="video/mp4"
                  controls={true}
                  style={videoStyleMobile}
                  muted
                />
              </div>
            )}
          </div>
          {!isMobile && !isPad && (
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
            </div>
          )}
        </Grid>
      </Grid>
      <div style={containerText}>
        <Paper
          square
          elevation={2}
          sx={{
            background: "#CE2F2F",
            textAlign: "center",
            p: "18px",
            marginTop: "3%",
            marginBottom: "3%",
            padding: "1%",
          }}
        >
          <Typography
            className="page-title"
            variant="h5"
            color="white"
            sx={{
              fontSize: {
                xs: "0.75rem", // Font size for extra-small screens (less than 600px)
                sm: "1.5rem", // Font size for small screens (600px and above)
              },
              fontWeight: 400,
              px: "5%",
              fontFamily: "sans-serif",
            }}
          >
            Across the globe, people are reaching the era of Industry 4.0, in
            which technology has the capacity to push the boundaries of
            scientific knowledge as they are currently known.
          </Typography>
        </Paper>
      </div>
      <animated.div style={{ opacity: scrollYProgress, width: "100%"}}>
      <div style = {{width: "100%"}}> 
      <Grid container alignItems="center">
        <Paper
          square
          elevation={2}
          id = "homepagepaper"
          sx={{
            background: "#D9D9D9",
            textAlign: "center",
            marginTop: "3%",
            marginBottom: "3%",
            fontFamily: "sans-serif",
            borderRadius: "20%",
            maxWidth: "fit-content",
            fontSize: isMobile ? "15px" : "60px",
            padding: "4%",
            marginLeft: "8%",
          }}
        >
          CIRC
        </Paper>
        <div
          style={{
            height: "5px",
            width: isMobile ? "10%" : "30%",
            backgroundColor: "#000000",
            marginLeft: "10px", // Adjust the spacing as needed
          }}
        ></div>
        <Typography
          className="page-title"
          variant="h5"
          id = "homepagetext"
          color="black"
          sx={{
            fontSize: {
              xs: "0.5rem", // Font size for extra-small screens (less than 600px)
              sm: "1.3rem", // Font size for small screens (600px and above)
            },
            fontWeight: 400,
            px: "1%",
          }}
        >
          Cardiovascular Innovation Research Center (CIRC) aims to <br />{" "}
          improve the quality and efficiency of care given to patient <br />{" "}
          through the development of cutting-edge technology and <br />{" "}
          techniques to combat cardiovascular disease.
        </Typography>
 
        <div
          style={{
            marginLeft: isMobile ? "40%" : "57%",
            marginTop: isMobile ? "0%" : "-5%",
          }}
        >
          <Button
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: isMobile ? "8px" : "18px",
              color: "#D81010",
              px: isMobile ? "10px" : "25px",
              border: "2px solid black", // Add border style
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
          >
            ABOUT US
          </Button>
        </div>
      </Grid>
      </div>
      </animated.div>
      <Grid container>
        <Typography
          className="page-title"
          variant="h5"
          color="black"
          sx={{
            fontSize: {
              xs: "1rem", // Font size for extra-small screens (less than 600px)
              sm: "3rem", // Font size for small screens (600px and above)
            },
            fontWeight: 800,
            px: "1%",
          }}
        >
          Current Research
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Card
            sx={{
              width: "350px",
              height: "350px",
              marginTop: "10%",
              marginBottom: "10%", 
              textAlign: "center",
              marginLeft: isMobile ? "10%" : "20%",
              overflow: "hidden",
              display: "flex", // Use flexbox for centering content
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              backgroundColor: "#000000", 
            }}
          >
            <CardContent>
              <div
              >
                <Typography
                  className="page-title"
                  variant="h2"
                  color="white"
                  sx={{
                    fontSize: {
                      xs: "1rem", // Font size for extra-small screens (less than 600px)
                      sm: "2rem", // Font size for small screens (600px and above)
                      // Add more entries for other breakpoints if needed
                    },
                    fontWeight: 300,
                    px: "10%",
                    py: "10%",
                    
                  }}
                >
                  Personalized Medicine via Advanced Imaging and Digital Twins
                </Typography>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

      <Grid item xs={12} md={4}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Card
            sx={{
              width: "350px",
              height: "350px",
              marginTop: "10%",
              marginBottom: "10%",
              textAlign: "center",
              marginLeft: isMobile ? "10%" : "20%",
              position: "relative",
              overflow: "hidden",
              display: "flex", // Use flexbox for centering content
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              backgroundColor: "#000000",
            }}
          >
            <CardContent>
            <div
              >
                <Typography
                  className="page-title"
                  variant="h2"
                  color="white"
                  sx={{
                    fontSize: {
                      xs: "1rem", // Font size for extra-small screens (less than 600px)
                      sm: "2rem", // Font size for small screens (600px and above)
                      // Add more entries for other breakpoints if needed
                    },
                    fontWeight: 300,
                    px: "10%",
                    py: "10%",

                  }}
                >
                  Development of Novel Cardiovascular Engineering Technologies
                </Typography>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

      <Grid item xs={12} md={4}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Card
            sx={{
              width: "350px",
              height: "350px",
              marginTop: "10%",
              marginBottom: "10%",
              textAlign: "center",
              marginLeft: isMobile ? "10%" : "20%",
              position: "relative",
              overflow: "hidden",
              display: "flex", // Use flexbox for centering content
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              backgroundColor: "#000000"
            }}
          >
            <CardContent>
            <div
              >
                <Typography
                  className="page-title"
                  variant="h2"
                  color="white"
                  sx={{
                    fontSize: {
                      xs: "1rem", // Font size for extra-small screens (less than 600px)
                      sm: "2rem", // Font size for small screens (600px and above)
                      // Add more entries for other breakpoints if needed
                    },
                    fontWeight: 300,
                    px: "10%",
                    py: "10%",
                  }}
                >
                  Development of Cardiovascular Artificial Intelligence and Machine Learning Technologies
                </Typography>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default Home;
