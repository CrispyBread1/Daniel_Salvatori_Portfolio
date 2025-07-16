import React from "react"
import './projectBoard.css'
import FrogBack from '../imgs/frog_back.png'
import Project from "../components/project"
import salvatori_admin_1 from '../imgs/projects/salvatori_admin/admin_1.png'
import salvatori_admin_2 from '../imgs/projects/salvatori_admin/admin_2.png'
import salvatori_admin_3 from '../imgs/projects/salvatori_admin/admin_3.png'
import salvatori_admin_4 from '../imgs/projects/salvatori_admin/admin_4.png'
import salvatori_stock_1 from '../imgs/projects/salvatori_stock/stock_1.png'
import salvatori_stock_2 from '../imgs/projects/salvatori_stock/stock_2.png'
import salvatori_stock_3 from '../imgs/projects/salvatori_stock/stock_3.png'



const ProjectBoard = ({backToHome}) => {
    
    const salvatoriButchersAdminGit = 'https://github.com/CrispyBread1/Salvatori_Butchers'
    const salvatoriStockAppGit = 'https://github.com/CrispyBread1/Salvatori_butchers_stock'

    const titles = ['Salvatori Food Service: Desktop', 'Salvatori Food Service: App']

    const salvatori_admin_images = [salvatori_admin_1, salvatori_admin_2, salvatori_admin_3, salvatori_admin_4]
    const salvatori_stock_images = [salvatori_stock_1, salvatori_stock_2, salvatori_stock_3]

    const salvatori_admin_details = [
      'Designed and built a fully bespoke Python desktop app to automate key business workflows, integrating directly with Sage 50 and third-party services where Sage fell short.',
      'Reduced repetitive admin tasks from 3 hours a day to under 5 minutes, streamlining operations and cutting out bottlenecks.',
      'Used Supabase as a centralized backend to ensure reliable, scalable data handling across the system.',
      'Built cross-platform executables (Windows/macOS) using GitHub Actions for smooth internal deployment.',
      'Implemented secure user authentication and role-based access control, making sure sensitive tools stay in the right hands',
      'Designed the entire UI/UX from scratch, keeping it simple enough for non-technical users without sacrificing functionality.',
      'Worked closely with staff and leadership to tailor the app directly to the specific working and flow of the company, just what the business actually needed.'
    ]
    
    const salvatori_stock_details = [
      'Developed a dedicated Android companion app for butchery floor teams to track deliveries and stock movements live, improving traceability and efficiency.',
      'Fully synced with the desktop system via Supabase, keeping both sides of the business connected in real time.',
      'Rolled out secure logins and user-level access, so staff only see what they need to.',
      'Designed the mobile UX for speed and clarity, for people who don’t have time to tap through 10 menus.',
      'Solved real communication gaps between admin and floor staff with practical tech that fits into their existing workflow.'
    ]

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
                <li className="SingleProject"><Project projectId="project-salvatori-admin" projectIMGs={salvatori_admin_images} gitHubLink={salvatoriButchersAdminGit} title={titles[0]} details={salvatori_admin_details}/></li>
                <li className="SingleProject"><Project projectId="project-salvatori-stock" projectIMGs={salvatori_stock_images} gitHubLink={salvatoriStockAppGit} title={titles[1]} details={salvatori_stock_details}/></li>
            </ul>
            
        </div>
    )
}

export default ProjectBoard
