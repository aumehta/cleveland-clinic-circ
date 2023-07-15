import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  Divider,
  Stack,
  CardContent,
} from "@mui/material";
import group_pic from "./Photos/group_photo.jpg";
import test from "./Photos/test.jpg";
import test1 from "./Photos/test1.png";
import { motion } from 'framer-motion';
import arohi from "./Photos/arohi.JPG";


const imageStyle = {
  width: "100%",
  height: "60%",
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
  marginTop: "90px",
};

const grid = {
    fontFamily: "sans-serif",
    width: "100%", // Adjust the width of the text block
    whiteSpace: "pre-wrap",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start", // Center horizontally,
  justifyContent: "center",
  height: "60vh", // Adjust the height as needed,
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

const teamContainer = {
    fontFamily: "sans-serif",
    whiteSpace: "pre-wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  };
function About() {
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
              fontSize: "3.4rem",
              fontWeight: 900,
              px: "6%",
              display: { xs: "none", sm: "block" },
            }}
          >
            About Us
            <hr style={hrLine} />
            We enable global innovation <br />
            through collaboration
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
              fontSize: "0.7 rem",
              fontWeight: 400,
              px: "3%",
              display: { xs: "none", sm: "block" },
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
          <Typography
            variant="h2"
            color="black"
            sx={{
              fontSize: "3.0rem",
              fontWeight: 900,
              px: "5%",
              marginLeft: "10%",
              display: { xs: "none", sm: "block" },
            }}
          >
            Meet Our Team
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" size = "large" sx = {{marginTop: "0.4%", marginLeft: "10%", backgroundColor: "#CE2F2F", "&:hover": {
      backgroundColor: "#000000",
    } }}>
              Lab 1 
            </Button>
            <Button variant="contained" size = "large" sx = {{marginTop: "0.4%", marginLeft: "10%", backgroundColor: "#CE2F2F", "&:hover": {
      backgroundColor: "#000000",
    }}}>
              Lab 2 
            </Button>
            <Button variant="contained" size = "large" sx = {{marginTop: "0.4%", marginLeft: "10%", backgroundColor: "#CE2F2F", "&:hover": {
      backgroundColor: "#000000",
    },}}>
               Lab 3
            </Button>
        </Grid>
        
        </Grid> 
        <Grid container spacing={2}>
  {Array.from(Array(9).keys()).map((index) => (
    <Grid item xs={12} sm={6} md={4}key={index}>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Card sx={{ borderRadius: '50%', width: "40vh", height: "40vh", marginTop: '20%', textAlign: 'center', marginLeft: "20%", position: 'relative', overflow: 'hidden' }}>
        <CardContent>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, borderRadius: '50%', overflow: 'hidden' }}>
          <img src={arohi} style={{ width: "100%", height: "100%", objectFit: 'cover', borderRadius: '50%' }} />
          </div> 
        </CardContent>
      </Card>
      </motion.div>
      <Typography variant="subtitle1" component="div" sx={{ marginTop: '7%', marginLeft: '5%', textAlign: 'center',}}>
              Arohi Mehta 
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ marginLeft: '5%', textAlign: 'center',}}>
              Student Researcher
            </Typography>
    </Grid>
  ))}
</Grid>
    </Container>
  );
}

export default About;
