import React, { useState } from "react";

// External Components
import {
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
// import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    minHeight: "91.5vh",
    lineHeight: "1.5",
  },
  paper: {
    [theme.breakpoints.up("sm")]: {
      borderRadius: "5%",
      marginRight: 30,
    },
    [theme.breakpoints.up(1150)]: {
      marginLeft: 50,
      width: 500,
    },
    height: "100%",
    marginTop: theme.spacing.unit * 6,
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
}));

function InstituteReg() {
  
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        style={{ marginTop: "30px", color:"#fff" }}
      >
        Welcome, Central Authority
      </Typography>
      
      <Grid
        container
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: " center",
        }}
        direction="column"
        align
      >
        <Paper className={classes.paper} style={{ borderRadius: "10px" }}>
          <Card
            style={{
              border: "1px solid #363b98",
              minWidth: "250px",
              minHeight: "70px",
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h5" color="primary">
                View Certificate
              </Typography>
            </CardContent>
          </Card>
          <Box m={4} />
          
          </Paper>
       
      </Grid>
    </>
  );
}

export default InstituteReg;
