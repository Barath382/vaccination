import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import QRCode from "../Static/images/QRCode.jpeg";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SingleCard = (props) => {
  const Request = props.Request;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={2}>
        <CardHeader
          title={Request.reqDate}
          action={
            <IconButton aria-label="settings" onClick={handleOpen}>
              <QrCode2Icon fontSize="medium" color="primary" />
            </IconButton>
          }
          avatar={
            <Avatar sx={{ bgcolor: red[500] }}>{Request.reqDate[0]}</Avatar>
          }
        />
        <CardContent>
          <Typography>Visitor :{Request.visitor}</Typography>
          <Typography>Purpose :{Request.purpose}</Typography>
          <Typography noWrap>Id : {Request.uniqueId}</Typography>
        </CardContent>
        <CardActions sx={{ ml: "10px", mb: "15px" }}>
          <Link to={"/requeststatus/" + Request.visitor}>
            <Button variant="outlined" size="small" color="success">
              Show More
            </Button>
          </Link>
        </CardActions>
      </Card>

      {/* Modal Card for QR CODE  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={QRCode} alt="QR Code" />
        </Box>
      </Modal>
    </div>
  );
};

export default SingleCard;
