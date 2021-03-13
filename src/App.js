import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from "./Components/Header"
import Details from "./Components/Details"
import { AvatarGroup } from '@material-ui/lab';
import AvatarBackground from './Components/BioData/AvatarBackground';
import { useState, useEffect } from 'react';
import WindowDimens from './Hooks/WindowDimens';
import { Typography } from '@material-ui/core';
import About from './Components/BioData/About';
import './CSS/Background.css'

function App() {
  const { height, width } = WindowDimens();

  const [show, setShow] = useState(0);



  return (
    <>
      <Header></Header>
      <About></About>
    </>
  );
}

export default App;
