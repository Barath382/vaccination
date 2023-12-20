import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";


const RequestMainCard = () => {
  const { visitor } = useParams();
  return (
    <Container>
      <Grid Container>
        <Grid item lg={10} sm={12}>
          <Card sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="text.secondary" gutterBottom noWrap>
                  {visitor}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestMainCard;
