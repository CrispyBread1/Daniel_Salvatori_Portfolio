import React, { useEffect } from "react"
import './cv.css'

const CV = ({backToHome}) => {


    const moveToHome = () => {
        backToHome()
    }

    // useEffect(() => {
    //     moveToCV()
    // }, [])

    return(
        
        <div id="CV" onClick={moveToHome}>
            <h1>CV</h1>
            <p  className='Button'>click me to return</p>
        </div>
    )
}

export default CV