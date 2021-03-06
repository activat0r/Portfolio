import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from "./Components/Header"
import Details from "./Components/Details"

function App() {
  return (
    <Grid container>
      <Header></Header>
      <Details></Details>
    </Grid>
  );
}

export default App;
