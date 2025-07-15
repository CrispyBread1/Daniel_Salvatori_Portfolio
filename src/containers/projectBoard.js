import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'
import Project from "../components/project"
import robit from '../imgs/projects/Robit.png'
import salvatori_admin from '../imgs/projects/salvatori_admin/admin_1.png'
import salvatori_stock from '../imgs/projects/salvatori_stock/stock_1.png'



const ProjectBoard = ({backToHome}) => {
    
    const salvatoriButchersAdminGit = 'https://github.com/CrispyBread1/Salvatori_Butchers'
    const salvatoriStockAppGit = 'https://github.com/CrispyBread1/Salvatori_butchers_stock'
    const robitAppGit = 'https://github.com/CrispyBread1/Robit.git'

    const titles = ['Salvatori Food Service: App', 'Salvatori Food Service: Desktop', 'Robit' ]

    const moveToHome = () => {
        const id = document.querySelector('[id="Project"]')
        backToHome(id.id)
    }
    
    

    return (
        
        <div id="Project" value="Project">
            <button className="ProjectToReturn" onClick={moveToHome} >Back</button>

            <div className= "Frog-back-image-projects">
                    <img className="Frog-Back-Image-Projectboard"src={FrogBack} />
            </div>

            <ul className="Projects">
                <li className="SingleProject"><Project projetIMG={salvatori_admin} gitHubLink={salvatoriButchersAdminGit} title={titles[0]}/></li>
                <li className="SingleProject"><Project projetIMG={salvatori_stock} gitHubLink={salvatoriStockAppGit} title={titles[1]}/></li>
                <li className="SingleProject"><Project projetIMG={robit} gitHubLink={robitAppGit} title={titles[2]}/></li>
            </ul>
            
        </div>
    )
}

export default ProjectBoard
