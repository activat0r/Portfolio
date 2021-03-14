import React, { Component} from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Roles from "./Experience/Roles";
import Sizing from "@material-ui/system/sizing"
import Box from "@material-ui/core/Box"
import About from "./BioData/About";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      paddingBottom: "2rem",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
      experience:{
        paddingLeft:0,
        paddingRight:0,
      },
      projects:{

      },
      roles:{
        
      },
   
  }));

function Details() {

    const classes = useStyles();


    return (
      <Container className={classes.root} >
      <Grid container direction="column" spacing={3}>
        <Grid item  className={classes.experience}><Experience></Experience></Grid>
        <Grid item className={classes.projects}><Projects></Projects></Grid>
        <Grid item className={classes.roles}><Roles></Roles></Grid>
      </Grid>
      </Container>
    );
  }
  
  export default Details;
  