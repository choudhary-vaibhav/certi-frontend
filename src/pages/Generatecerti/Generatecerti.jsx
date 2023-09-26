import React, { useState } from "react";
import { Link } from 'react-router-dom';
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


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
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
   const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        style={{ marginTop: "30px", color:"#fff" }}
      >
        Welcome, Institute
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
        <Paper className={classes.paper} style={{ borderRadius: "10px",backgroundColor:"#252541" }}>
          <Card
            style={{
              border: "1px solid #363b98",
              minWidth: "250px",
              minHeight: "70px",
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary">
                Generate Certificate
              </Typography>
            </CardContent>
          </Card>
           <Form noValidate validated={validated} onSubmit={handleSubmit} style={{color:"#fff"}
           }>
      <Row style={{display:"block"}} >
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label style={{color:"#fff",fontSize:"12px"}}>Institute Account Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Account Address"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label style={{color:"#fff",fontSize:"12px"}}>Institute name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Institute Name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label style={{color:"#fff", fontSize:"12px"}}>Institute Acronym</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Institute Acronym"
         
          />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          
        </Form.Group>
      </Row>
      <Row >
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label style={{color:"#fff",fontSize:"12px"}}>Institute website link</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid" style={{fontSize:"12px"}}>
            Please provide a valid link.
          </Form.Control.Feedback>
        </Form.Group>
      
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label style={{color:"#fff",fontSize:"12px"}}>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label style={{color:"#fff",fontSize:"12px"}}>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Form.Group >
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
     <Box display="flex">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "30px", fontWeight: "600" }}
                component={Link}
                to="/"
              >
               Submit
              </Button>
            
            </Box>
    </Form>
          <Box m={4} />
          
          </Paper>
       
      </Grid>
    </>
  );
}

export default InstituteReg;
