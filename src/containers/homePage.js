import React, { useState } from "react"
import './homePage.css'
import frogFront from '../imgs/frog_front_preview_rev_1.png'
import frogJumpRight from '../imgs/frog_jump.png'
import frogJumpLeft from '../imgs/frog_jump_reversed.png'

const HomePage = ({moveBackground}) => {

    const [frogImage, setFrogImage] = useState(frogFront)

    const moveToCV = () => {
        const id = document.querySelector('[id="CV"]')
        moveFroggy(id.id)
        moveBackground(id.id)
    }

    const moveToProject = () => {
        const id = document.querySelector('[id="Project"]')
        moveFroggy(id.id)
        moveBackground(id.id)
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
                console.log(posX)
                changeImageJumpFacingLeft()
                posY+= 0.25; 
                posX-= 0.8;
                frog.style.top = posY + 'em'; 
                frog.style.left = posX + 'em'; 
            }
            }
        } else if (name === 'Project'){
            id = setInterval(frame, 25);
            function frame() {
                if (posX >= 68 ) {
                    clearInterval(id);
                    resetImage()
                } else {
                    console.log(posX)
                    changeImageJumpFacingRight()
                    posY+= 0.098; 
                    posX+= 0.8;
                    frog.style.top = posY + 'em'; 
                    frog.style.left = posX + 'em'; 
                }
                }
        }
    }

    // const moveFroggyRight = () => {
    //     let id = null;
    //     let frog = document.querySelector(".Frog");
    //     let posY = 24;
    //     let posX = 40;
    //     clearInterval(id);
    //     id = setInterval(frame, 25);
    //     function frame() {
    //     if (posX >= 68 ) {
    //         clearInterval(id);
    //         resetImage()
    //     } else {
    //         console.log(posX)
    //         changeImageJumpFacingRight()
    //         posY+= 0.098; 
    //         posX+= 0.8;
    //         frog.style.top = posY + 'em'; 
    //         frog.style.left = posX + 'em'; 
    //         // pos = pos + 1
    //     }
    //     }
    // }

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
        <button className="CV-Button"id="CV" onClick={moveToCV}>CV</button>
        <button className="Project-Button"id="Project" onClick={moveToProject}>Project</button>

        <div className="Frog">
            <img src={frogImage} onClick={moveFroggy} width="500%" height="auto"/>
        </div>
        
        </div>
    )
}

export default HomePage