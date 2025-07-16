import React, { useState } from "react"
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
        let posY = 24;
        let posX = 50;
        clearInterval(id);
        if (name === 'Project'){
            id = setInterval(frame, 40);
            function frame() {
            if (posX <= 15) {
                clearInterval(id);
                resetImage()
            } else {
                changeImageJumpFacingLeft()
                posY+= 0.7; 
                posX-= 2;
                frog.style.top = posY + 'vw'; 
                frog.style.left = posX + 'vw'; 
            }
            }
        } else if (name === 'CV'){
            id = setInterval(frame, 25);
            function frame() {
                if (posX >= 80 ) {
                    clearInterval(id);
                    resetImage()
                } else {
                    changeImageJumpFacingRight()
                    posY+= 0.18; 
                    posX+= 1;
                    frog.style.top = posY + 'vw'; 
                    frog.style.left = posX + 'vw'; 
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
        <div className="Home">
        {/* <h1 className="Title">Salvatori's Portfolio</h1> */}
        <img className="Project-Title" src={projectTitle} />

        <div className="NavButtons">
        <div onClick={moveToProject} id="Project-Button" value="Project"><img className="Project-images"src={projectsButton}/></div>
        <div onClick={moveToCV} id="CV-Button" value="CV"><img className="CV-images"src={aboutMeButton}/></div>
        </div>

        <div className="Frog">
            <img className="Froggy-homepage-image"src={frogImage} onClick={moveFroggy} />
        </div>
        
        </div>
    )
}

export default HomePage;
