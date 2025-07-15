import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'
import Project from "../components/project"
import robit from '../imgs/projects/Robit.png'
import salvatori_admin_1 from '../imgs/projects/salvatori_admin/admin_1.png'
import salvatori_admin_2 from '../imgs/projects/salvatori_admin/admin_1.png'
import salvatori_admin_3 from '../imgs/projects/salvatori_admin/admin_1.png'
import salvatori_stock_1 from '../imgs/projects/salvatori_stock/stock_1.png'
import salvatori_stock_2 from '../imgs/projects/salvatori_stock/stock_1.png'
import salvatori_stock_3 from '../imgs/projects/salvatori_stock/stock_1.png'



const ProjectBoard = ({backToHome}) => {
    
    const salvatoriButchersAdminGit = 'https://github.com/CrispyBread1/Salvatori_Butchers'
    const salvatoriStockAppGit = 'https://github.com/CrispyBread1/Salvatori_butchers_stock'
    const robitAppGit = 'https://github.com/CrispyBread1/Robit.git'

    const titles = ['Salvatori Food Service: App', 'Salvatori Food Service: Desktop', 'Robit' ]

    const salvatori_admin_images = [salvatori_admin_1, salvatori_admin_2, salvatori_admin_3]
    const salvatori_stock_images = [salvatori_stock_1, salvatori_stock_2, salvatori_stock_3]
    const robit_images = [robit]

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
                <li className="SingleProject"><Project projectIMGs={salvatori_admin_images} gitHubLink={salvatoriButchersAdminGit} title={titles[0]}/></li>
                <li className="SingleProject"><Project projectIMGs={salvatori_stock_images} gitHubLink={salvatoriStockAppGit} title={titles[1]}/></li>
                <li className="SingleProject"><Project projectIMGs={robit_images} gitHubLink={robitAppGit} title={titles[2]}/></li>
            </ul>
            
        </div>
    )
}

export default ProjectBoard
