import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../../style/Header.css";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  const sideNavHandle = () => {
    setSideNav(!sideNav);
  };

  const drawer = (
    <Box onClick={sideNavHandle} sx={{ alignItems: "center" }}>
      <Typography sx={{ flexGrow: 1 ,px:'20px',py:'11px'}} variant={"h5"} component={"div"}>
        <LocalPizzaIcon sx={{ color: "orange" }} />
        My Restaurant
      </Typography>
      <ul className="mobile-Navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contect">Contect</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#1A1A19" }}>
          <Toolbar>
            <IconButton
              onClick={sideNavHandle}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ display: { sm: "none" }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }} variant={"h6"} component={"div"}>
              <LocalPizzaIcon sx={{ color: "orange" }} />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="Navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contect">Contect</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={sideNav}
            onClose={sideNavHandle}
            sx={{ display: { sx: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/> 
        </Box>
       
      </Box>
    </>
  );
};

export default Header;
