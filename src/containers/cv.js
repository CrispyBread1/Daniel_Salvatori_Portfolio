import React, { useEffect } from "react"
import './cv.css'
import FrogBack from '../imgs/frog_back.png'
import HomePage from "./homePage.js"


const CV = ({backToHome}) => {
    const home = HomePage

    const moveToHome = () => {
        const id = document.querySelector('[id="CV"]')
        backToHome(id.id)
        home.moveFroggyBacktoMiddle(id.id)
    }


    return(
        
        <div id="CV" >
            <h5 className="CVToReturn" onClick={moveToHome}>click here to return</h5>
            <div className= "Frog-back-image-cv">
                <img src={FrogBack} width="130em" height="auto"/>
            </div>
        </div>

    )
}

export default CV