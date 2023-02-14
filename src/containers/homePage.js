import React from "react"
import './homePage.css'

const HomePage = ({cvMoveToRight, projectMoveToLeft}) => {

    const moveToCV = () => {
        cvMoveToRight()
    }

    const moveToProject = () => {
        projectMoveToLeft()
    }
    return (
        <div>
        <h1 id="Title">Daniel Salvatori's Portfolio</h1>
        <button onClick={moveToCV}>CV</button>
        <button onClick={moveToProject}>Project</button>
        
        </div>
    )
}

export default HomePage