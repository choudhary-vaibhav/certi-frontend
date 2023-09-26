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
        <Paper className={classes.paper} style={{ borderRadius: "10px",backgroundColor:"#252541" }}>
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
           <Form noValidate validated={validated} onSubmit={handleSubmit} style={{color:"#fff"}
           }>
      <Row style={{display:"block"}} >
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Institute Account Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Institute name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Institute Acronym</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row >
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Institute website link</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom04">
          <Form.Label>Courses</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
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
      <Button type="submit">Submit form</Button>
    </Form>
          <Box m={4} />
          
          </Paper>
       
      </Grid>
    </>
  );
}

export default InstituteReg;
