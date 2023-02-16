import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'
import Project from "../components/project"
import breakApp from '../imgs/projects/Break_time_app.png'
import animalAdoption from '../imgs/projects/animal_adoption.png'
import stocksApp from '../imgs/projects/stocks_app.png'

const ProjectBoard = ({backToHome}) => {
    
    const breakTimeAppGit = 'https://github.com/CrispyBread1/Breaktime_App.git'
    const animalAdopGit = 'https://github.com/CrispyBread1/Animal-adoption.git'
    const stocksGit = 'https://github.com/CrispyBread1/Stock_Analysis_js.git'

    const titles = ['BreakTime Tracker', 'Animal Adoption App', 'Stock Probability Calculator']
    const moveToHome = () => {
        const id = document.querySelector('[id="Project"]')
        backToHome(id.id)
    }
    
    

    return (
        
        <div id="Project" value="Project">
            {/* <h1>Projet board</h1> */}
            <h5 className="HereToReturn" onClick={moveToHome}>click here to return</h5>

            <div className= "Frog-back-image-projects">
                    <img src={FrogBack} width="130em" height="auto"/>
            </div>

            <ul className="Projects">
                <li className="SingleProject"><Project projetIMG={breakApp} gitHubLink={breakTimeAppGit} title={titles[0]}/></li>
                <li className="SingleProject"><Project projetIMG={animalAdoption} gitHubLink={animalAdopGit} title={titles[1]}/></li>
                <li className="SingleProject"><Project projetIMG={stocksApp}gitHubLink={stocksGit} title={titles[2]}/></li>
            </ul>
            
        </div>
    )
}

export default ProjectBoard
