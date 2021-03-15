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
import {Link} from 'react-router-dom'
import { act } from "react-dom/test-utils";
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
    const [homeToggle, setHomeToggle] = useState(false)
    const [projectsToggle, setProjectsToggle] = useState(false)
    const [experienceToggle, setExperienceToggle] = useState(false)
    const [blogsToggle, setBlogsToggle] = useState(false)
    const[activeId, setActiveId] = useState(1);

    useEffect(()=>{
      const persistTab = localStorage.getItem("activeTab")
      if(persistTab){
        setActiveId(parseInt(persistTab))
      }

    },[])

    useEffect(()=>{
      localStorage.setItem("activeTab", activeId)
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
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>setActiveId(1)}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
          <a className={`${homeToggle ? 'active' : ''} nav-link`} aria-current="page" href="#">About</a>
          </Link>
        </li>
        <li className="nav-item" onClick={()=>setActiveId(2)}>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/projects">
          <a className={`${projectsToggle ? 'active' : ''} nav-link`} href="#">Projects</a>
          </Link>

        </li>
        <li className="nav-item" onClick={()=>setActiveId(3)}>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/experience">
          <a className={`${experienceToggle ? 'active' : ''} nav-link`} href="#">Experience</a>
          </Link>

        </li>
        <li className="nav-item" onClick={()=>setActiveId(4)}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/blogs">
          <a className={`${blogsToggle ? 'active' : ''} nav-link`} href="#">Blogs</a>
          </Link>

        </li>
        <li className="nav-item" onClick={()=>setActiveId(5)}>
          <a className="nav-link pdf-icon" target="_blank" href="https://drive.google.com/file/d/1Bv_CCNKiKlt-C9dBxNloM08tQagwLFKo/view?usp=sharing">Resume</a>

        </li>
      </ul>
    </div>
  </div>
</nav>
     
    );
  }
  
  export default Header;
  