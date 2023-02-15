import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'

const ProjectBoard = ({backToHome}) => {
    
    const moveToHome = () => {
        const id = document.querySelector('[id="Project"]')
        backToHome(id.id)
    }
    
    return (
        
        <div id="Project" onClick={moveToHome} value="Project">
            <h1>Projet board</h1>

        <p>click me to return</p>
        <div className= "Frog-back-image-projects">
                <img src={FrogBack} width="130em" height="auto"/>
            </div>
        </div>
    )
}

export default ProjectBoard
