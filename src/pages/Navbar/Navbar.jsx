import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@material-ui/core';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#fff"}}>
      <Button
      variant="contained"
      color="primary"
      size="large"
      style={{ marginRight: "0px", marginLeft: "80vw", fontWeight: "600" }}
      component={Link}
      to= "/"
    >
    home
    </Button>
    <ConnectButton
                  showBalance={false}
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                  }}
                />
        {/* <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
}
