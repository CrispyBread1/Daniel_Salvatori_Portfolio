import React, { useState } from "react"
import './homePage.css'
import frogFront from '../imgs/frog_front_preview_rev_1.png'
import frogJumpRight from '../imgs/frog_jump.png'
import frogJumpLeft from '../imgs/frog_jump_reversed.png'

const HomePage = ({moveBackground}) => {

    const [frogImage, setFrogImage] = useState(frogFront)

    const moveToCV = () => {
        const id = document.querySelector('[id="CV-Button"]')
        moveFroggy(id.value)
        setTimeout(function() {moveBackground(id.value)}, 1500);
    }

    const moveToProject = () => {
        const id = document.querySelector('[id="Project-Button"]')
        moveFroggy(id.value)
        setTimeout(function() {moveBackground(id.value)}, 1500); 
    }


    const moveFroggy = (name) => {
        let id = null;
        let frog = document.querySelector(".Frog");
        let posY = 24;
        let posX = 40;
        clearInterval(id);
        if (name === 'Project'){
            id = setInterval(frame, 25);
            function frame() {
            if (posX <= 12 ) {
                clearInterval(id);
                resetImage()
            } else {
                changeImageJumpFacingLeft()
                posY+= 0.25; 
                posX-= 0.8;
                frog.style.top = posY + 'em'; 
                frog.style.left = posX + 'em'; 
            }
            }
        } else if (name === 'CV'){
            id = setInterval(frame, 25);
            function frame() {
                if (posX >= 68 ) {
                    clearInterval(id);
                    resetImage()
                } else {
                    changeImageJumpFacingRight()
                    posY+= 0.098; 
                    posX+= 0.8;
                    frog.style.top = posY + 'em'; 
                    frog.style.left = posX + 'em'; 
                }
                }
        }
    }

    
  const changeImageJumpFacingRight = () => {
    setFrogImage(frogJumpRight)
  }


  const changeImageJumpFacingLeft = () => {
    setFrogImage(frogJumpLeft)
  }

  const resetImage = () => {
    setFrogImage(frogFront)
  }
    return (
        <div>
        <h1 id="Title">Daniel Salvatori's Portfolio</h1>
        <button id="CV-Button" onClick={moveToCV} value="CV">CV</button>
        <button id="Project-Button" onClick={moveToProject} value="Project">Project</button>

        <div className="Frog">
            <img src={frogImage} onClick={moveFroggy} width="130em" height="auto"/>
        </div>
        
        </div>
    )
}

export default HomePage