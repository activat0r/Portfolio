import React, {useState, Component, useEffect} from "react";
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
import "../CSS/Header.css"


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
    const [homeToggle, setHomeToggle] = useState(true)
    const [projectsToggle, setProjectsToggle] = useState(false)
    const [experienceToggle, setExperienceToggle] = useState(false)
    const [blogsToggle, setBlogsToggle] = useState(false)

    const[activeId, setActiveId] = useState(1);

    useEffect(()=>{
      console.log(activeId)
      switch (activeId){

        case 1: 
          setHomeToggle(true)
          setProjectsToggle(false)
          setExperienceToggle(false)
          setBlogsToggle(false)

          break;

        case 2:
          setHomeToggle(false)
          setProjectsToggle(true)
          setExperienceToggle(false)
          setBlogsToggle(false)
          break;

        case 3:
          setHomeToggle(false)
          setProjectsToggle(false)
          setExperienceToggle(true)
          setBlogsToggle(false)
          break;


        case 4:
          setHomeToggle(false)
          setProjectsToggle(false)
          setExperienceToggle(false)
          setBlogsToggle(true)
          break;
      }
    },[activeId])


    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>setActiveId(1)}>
          <a className={`${homeToggle ? 'active' : ''} nav-link`} aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item" onClick={()=>setActiveId(2)}>
          <a className={`${projectsToggle ? 'active' : ''} nav-link`} href="#">Projects</a>
        </li>
        <li className="nav-item" onClick={()=>setActiveId(3)}>
          <a className={`${experienceToggle ? 'active' : ''} nav-link`} href="#">Experience</a>
        </li>
        <li className="nav-item" onClick={()=>setActiveId(4)}>
          <a className={`${blogsToggle ? 'active' : ''} nav-link`} href="#">Blogs</a>
        </li>
        <li className="nav-item" onClick={()=>setActiveId(5)}>
          <a className="nav-link" href="#">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    );
  }
  
  export default Header;
  