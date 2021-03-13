import React, {useState, Component} from "react";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from "@material-ui/core";
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
      color: `#ffffff`,
    },

  }));

  


function Header() {

    const classes = useStyles();
    const [toggle, setToggle] = useState(true)
    const handleNavCollapse = () => setToggle(!toggle);

    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    );
  }
  
  export default Header;
  