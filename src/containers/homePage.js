import React, { useEffect, useState } from "react"
import './homePage.css'
import frogFront from '../imgs/frog_front_preview_rev_1.png'
import frogJumpRight from '../imgs/frog_jump.png'
import frogJumpLeft from '../imgs/frog_jump_reversed.png'
import projectTitle from '../imgs/words/title.png'
import aboutMeButton from '../imgs/words/aboutMe.png'
import projectsButton from '../imgs/words/projects.png'

const HomePage = ({moveBackground}) => {

    const [frogImage, setFrogImage] = useState(frogFront)



    const moveToCV = () => {
        const id = 'CV'
        moveFroggy(id)
        setTimeout(function() {moveBackground(id)}, 1500);
    }

    const moveToProject = () => {
        const id = 'Project'
        moveFroggy(id)
        setTimeout(function() {moveBackground(id)}, 1500); 
    }

    const moveFroggy = (name) => {
        let id = null;
        let frog = document.querySelector(".Frog");
        let posY = 33;
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

    const moveFroggyBacktoMiddle = (name) => {
        console.log(name)
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
        {/* <h1 className="Title">Salvatori's Portfolio</h1> */}
        <img className="Project-Title" src={projectTitle} width="400em" height="auto"/>

        <div className="NavButtons">
        <div onClick={moveToProject} id="Project-Button" value="Project"><img src={projectsButton}  width="80em" height="auto"/></div>
        <div onClick={moveToCV} id="CV-Button" value="CV"><img src={aboutMeButton}  width="100em" height="auto"/></div>
        </div>

        <div className="Frog">
            <img src={frogImage} onClick={moveFroggy} width="130em" height="auto"/>
        </div>
        
        </div>
    )
}

export default HomePage;
