import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate } from 'react-router-dom'
const Boxstyle = {
  height: "150px",
  width: "100%",
  margin: "50px auto",
  borderRadius: "0 0 20px 20px ",
  overflow: "hidden",
  backgroundImage: "linear-gradient(to bottom, #030327, #19906F)",
  position: "relative",
};
const circleRight = {
  position: "absolute",
  top: "50px",
  right: "-50px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(33%)",
  height: "300px",
  width: "350px",
  borderRadius: "50%",
};
const circleLeft = {
  position: "absolute",
  top: "-50px",
  right: "80%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(33%)",
  height: "150px",
  width: "400px",
  borderRadius: "60%",
};
const bigCircleLeft = {
  position: "absolute",
  top: "-40px",
  right: "-70px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(33%)",
  height: "350px",
  width: "700px",
  borderRadius: "60% 30%",
};
const bigCircleRight = {
  position: "absolute",
  top: "-20px",
  right: "60%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(33%)",
  height: "400px",
  width: "600px",
  borderRadius: "50%",
};
const topicContent = {
  position: "absolute",
  top: "25px",
  left: "45px",
};
const TopicBox = () => {

  const Navigate = useNavigate();

  const pathName = window.location.pathname;
  console.log(pathName);
  const pathArr = pathName.split('/')
  const n = pathArr.length
  let displayicon = 'inline'
  if (pathName === '/') {
    pathArr[n-1] = "Home";
    displayicon = 'none'


  }
  return (
    <>
      <Box sx={Boxstyle} position={'static'}>
        <Box sx={bigCircleLeft}></Box>
        <Box sx={bigCircleRight}></Box>
        <Box sx={circleRight}></Box>
        <Box sx={circleLeft}></Box>
        <Box sx={topicContent}>
          <Typography variant="h5" fontWeight={"bold"} color={"white"} mt={1} textTransform={'uppercase'}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1,display: displayicon }}
              onClick={()=> Navigate(-1)}
            >
              <ArrowCircleLeftTwoToneIcon fontSize="large" />
            </IconButton>
            {pathArr[n-1]}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TopicBox;
