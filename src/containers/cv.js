import React, { useEffect } from "react"
import './cv.css'
import FrogBack from '../imgs/frog_back.png'
import Frogfront from '../imgs/frog_front_preview_rev_1.png'


const CV = ({backToHome}) => {


    const moveToHome = () => {
        const id = document.querySelector('[id="CV"]')
        backToHome(id.id)
    }

    // useEffect(() => {
    //     moveToCV()
    // }, [])

    return(
        
        <div id="CV" onClick={moveToHome}>
            <h1>CV</h1>
            <p >click me to return</p>
            <div className= "Frog-back-image">
                <img src={FrogBack} width="130em" height="auto"/>
            </div>
        </div>

    )
}

export default CV