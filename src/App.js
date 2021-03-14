import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from "./Components/Header"
import Details from "./Components/Details"
import { useState, useEffect } from 'react';
import WindowDimens from './Hooks/WindowDimens';
import { Typography } from '@material-ui/core';
import About from './Components/BioData/About';
import './CSS/Background.css'
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
function App() {
  const { height, width } = WindowDimens();

  const [show, setShow] = useState(0);



  return (
    <>
    <Router>
      <Header></Header>
      <Switch>
      <Route exact component={About} path="" />
      <Route exact component={About} path="/" />
      <Route exact component={About} path="/about" />
      <Route exact component={Projects} path="/project" />
      <Route exact component={Experience} path="/experience" />
      <Route exact component={Blogs} path="/blogs" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
