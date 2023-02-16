import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'
import Project from "../components/project"
import breakApp from '../imgs/projects/Break_time_app.png'
import animalAdoption from '../imgs/projects/animal_adoption.png'
import stocksApp from '../imgs/projects/stocks_app.png'

const ProjectBoard = ({backToHome}) => {
    
    const moveToHome = () => {
        const id = document.querySelector('[id="Project"]')
        backToHome(id.id)
    }
    
    

    return (
        
        <div id="Project" onClick={moveToHome} value="Project">
            {/* <h1>Projet board</h1> */}
            <h5 className="HereToReturn">click here to return</h5>

            <div className= "Frog-back-image-projects">
                    <img src={FrogBack} width="130em" height="auto"/>
            </div>

            <ul className="Projects">
                <li className="SingalProject"><Project className="Breakapp"projetIMG={breakApp}/></li>
                <li className="SingalProject"><Project projetIMG={animalAdoption}/></li>
                <li className="SingalProject"><Project projetIMG={stocksApp}/></li>
            </ul>
            
        </div>
    )
}

export default ProjectBoard
