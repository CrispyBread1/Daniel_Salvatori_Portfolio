import React from "react";
import './project.css'


const Project = ({projectIMGs, gitHubLink, title, details}) => {
    
  const configureDetails = () => {
    const list_item = []
    for (var detail of details) {
      list_item.push(<li>{detail}</li>)
    }
    return list_item
  }
  
  
  return (
    <div className="Project-info">
        <img className="Project-image" src={projectIMGs[0]}/>
        <div className="LinkTitle">
          <p className="ProjectTitle">{title}</p>
        <hr/>
        <div>
          <a className="GitHubLink" href={gitHubLink}>GitHub</a></div>
        </div>
        <div className="ProjectDetails">
          <ul>
            {configureDetails()}
          </ul>
        </div>
    </div>
    )

}

export default Project
