import React, {Component ,Fragment,useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography";
import CardContent  from "@material-ui/core/CardContent";
import './../../CSS/Projects.css'
import { bottom } from "@popperjs/core";

function Projects(){

    const [loading, setLoading] = useState(true)
    const [data,setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("https://api.github.com/users/activat0r/repos")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
    },[])
    if (error) {
        return <div>Error</div>;
      } else if (loading) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className="container">
            <div className="row ">
          
            {data.map(data => (
            <div key={data.id} className="col-sm-12 col-md-4 col-lg-3 justify-content-center" style={{ paddingTop:"12px"}}>
             
              <div className="card" style={{color: "black"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title" >Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>

            ))}
         
          </div>
          </div>
        );
      }
   
}
export default Projects;
