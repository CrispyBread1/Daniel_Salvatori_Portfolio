import React from "react"
import './projectBoard.css'

const ProjectBoard = ({backToHome}) => {
    
    const moveToHome = () => {
        const id = document.querySelector('[id="Project"]')
        backToHome(id.id)
    }
    
    return (
        
        <div id="Project" onClick={moveToHome} value="Project">
            <h1>Projet board</h1>
      
        <p  className='Button'>click me to return</p>
        </div>
    )
}

export default ProjectBoard
