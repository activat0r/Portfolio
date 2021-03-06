import React, { Component} from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { palette } from "@material-ui/system";
import { green, purple, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button:{
      textPrimary: `#ffffff`,
    }
  }));

 const ConnectButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[700]),
      backgroundColor: blue[700],
      '&:hover': {
        backgroundColor: blue[900],
      },
    },
  }))(Button);
  


function Header() {

    const classes = useStyles();


    return (
      <AppBar position="static" >
        <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Aditya Sawant
    </Typography>
    <ConnectButton color="secondary" >Connect</ConnectButton>

  </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  