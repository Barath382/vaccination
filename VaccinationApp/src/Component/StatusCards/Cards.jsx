import SingleCard from "./SingleCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
const Cards = () => {
  const requests = [
    {
      reqDate: "September 15,2023",
      visitor: "Barath.R",
      purpose: "Regular Meet",
      uniqueId: "Barath_september_15_2023_regular_meet_room_food_carparking",
      batch: "process",
    },
    {
      reqDate: "August 15,2023",
      visitor: "Thamizharasan",
      purpose: "Regular Meet",
      uniqueId: "Thamizharasan_september_15_2023_regular_meet",
      batch: "process",
    },
    {
      reqDate: "September 15,2023",
      visitor: "Prathap.V",
      purpose: "Regular Meet",
      uniqueId: "Prathap_september_15_2023_regular_meet",
      batch: "Cancled",
    },
  ];

  return (
    <>
      <Container>
        <Box >
          <Grid container>
            <Grid item lg={8}></Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                color="success"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={4} mt={2}>
          <Divider textAlign="left" sx={{color : '#19906F'}}>RECENT</Divider>
        </Box>
        <Grid container spacing={4}>
          {requests.map((request) => (
            <Grid item xs={12} md={6} lg={4} key={request.uniqueId}>
              <SingleCard Request={request} />
            </Grid>
          ))}
        </Grid>

        {/* sample history */}
        <Box mb={4} mt={4}>
          <Divider textAlign="left" sx={{color : '#19906F'}}>HISTORY</Divider>
        </Box>
        <Grid container spacing={4}>
          {requests.map((request) => (
            <Grid item xs={12} md={6} lg={4} key={request.uniqueId}>
              <SingleCard Request={request} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
