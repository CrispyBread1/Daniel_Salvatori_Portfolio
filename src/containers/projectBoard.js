import React from "react"
import './projectBoard.css'

const ProjectBoard = ({backToHome}) => {
    
    const moveToHome = () => {
        backToHome()
    }
    
    return (
        
        <div id="Project" onClick={moveToHome}>
            <h1>Projet board</h1>
      
        <p  className='Button'>click me to return</p>
        </div>
    )
}

export default ProjectBoard
