import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import AppBars from "./AppBars";
import TopicBox from "./TopicBox";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* Side Bar */}
        <Navbar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        {/*  App Bar */}
        <AppBars handleDrawerToggle={handleDrawerToggle} />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f4f4f4", p: 1 }}>
          {/* green TopicBox */}
          <TopicBox/>
          {/* Main Content  */}
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
