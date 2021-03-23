import React, {Component ,Fragment,useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography";
import CardContent  from "@material-ui/core/CardContent";
import './../../CSS/Projects.css'
import { bottom } from "@popperjs/core";
import Error from "../Common/Loading/Error"
import Wrapper from "./../Common/Loading/Wrapper"
function ProjectList({projectList}){
  
  return(    
  <div className="container vertical-align">
  <div className="row hover-animation">

  {projectList.map(projectList => projectList.fork == false ? (
   
  <div key={projectList.id} className="col-sm-12 col-md-4 justify-content-center  project-card">
   
    <div className="card project-card-height card-hovered" style={{color: "black"}}>
      
      <div className="card-body project-card-body">
        <h5 className="card-title" >{projectList.name}</h5>
        <p className="card-text">{projectList.description}</p>
        <br/>
        <a href={projectList.html_url} target="_blank" className="btn btn-outline-secondary project-card-button ">Check Out</a>
      </div>
      </div>
  </div>

  ) : "")}

 
</div>
</div>
)
}



function Projects(){

    const [loading, setLoading] = useState(true)
    const [data,setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("https://api.github.com/users/activat0r/repos")
      .then(res => res.json())
      .then(
        (result) => {
          if(result.message!= "Not Found"){
          setLoading(false);
          setData(result);
        }
          else{
            setLoading(false);
            setError("error");
          }
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
    },[])
    if (error) {
        return  <Wrapper loadstatus={`${loading ? true: false}`} errorstatus={`${error ? true: false}`}></Wrapper>

      } else if (loading) {
        return <div>Loading...</div>;
      } else {
        return <ProjectList projectList={data}></ProjectList>
      }

   
}
export default Projects;
