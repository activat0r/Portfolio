import React, {Component ,Fragment,useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography";
import CardContent  from "@material-ui/core/CardContent";
import './../../CSS/Projects.css'

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
          <ul>
            {data.map(data => (
              <li key={data.id}><a className = "link-style" style={{wordWrap: "break-word", textDecoration:"none"}} target="_blank" href={data.html_url}>
                  {data.name}<br/>
                  {data.html_url}<br/>
                  {data.description} <br/>
                  {data.owner.login} 
                </a>
                <hr/>
              </li>
            ))}
          </ul>
          </div>
        );
      }
   
}
export default Projects;
