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
  <div className="container vertical-align  hover-animation">
  <div className="row ProjectsRow">
  <h5 className="projectHeader">Organizational Projects</h5>

   <div className="col-sm-12 col-md-4 justify-content-center  project-card">
    
     <div className="card project-card-height card-hovered" style={{color: "black"}}>
       
       <div className="card-body project-card-body">
         <h5 className="card-title" >AgileOnGo</h5>
         <p className="card-text">Mobile application for showing customized dashboards containing portfolio level metrics and progress indicaters to the stakeholders. The app uses ALM tools like Jira for its data.</p>
       </div>
       </div>
   </div>

   <div className="col-sm-12 col-md-4 justify-content-center  project-card">
    
    <div className="card project-card-height card-hovered" style={{color: "black"}}>
      
      <div className="card-body project-card-body">
        <h5 className="card-title" >Agile Maturity Assessment portal</h5>
        <p className="card-text">A web portal created to check the agile maturity level of the teams and analyse the teams for improvement areas.</p>
      </div>
      </div>
  </div>

  <div className="col-sm-12 col-md-4 justify-content-center  project-card">
    
     <div className="card project-card-height card-hovered" style={{color: "black"}}>
       
       <div className="card-body project-card-body">
         <h5 className="card-title" >Release Success Prediction</h5>
         <p className="card-text">App which uses historical data related to team's velocity to predict whether the release will be successful or not.</p>
       </div>
       </div>
   </div>

  </div>



  <div className="row ProjectsRow">
  <h5 className="projectHeader">Other Projects</h5>

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
