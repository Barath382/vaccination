import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "../Static/images/Logo.png";
import Profilepic from "../Static/images/profile.png";
import { teal } from "@mui/material/colors";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const AppBars = (props) => {

  const settings = ["Profile", "Change Password", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
        <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#ffff",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src={Logo} sx={{ width: 56, height: 56 }} />
          <Box>
            {/* <img src={Logo} alt="" width={50} height={50} sizes='100 em'/> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Chip
              sx={{ color: teal[900]}}
              avatar={<Avatar src={Profilepic} />}
              label="Somaya Deepakraju.M"
              variant="outlined"
              onClick={handleOpenUserMenu}
            />
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBars;
