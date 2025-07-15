import React from "react";
import './project.css'


const Project = ({projectIMGs, gitHubLink, title}) => {
    
  
  
  
  return (
    <div className="Project-info">
        <img className="Project-image" src={projectIMGs[0]}/>
        <div className="LinkTitle">
        <p className="ProjectTitle">{title}</p>
        <hr/>
        <div><a className="GitHubLink" href={gitHubLink}>GitHub</a></div>
        </div>
    </div>
    )

}

export default Project
