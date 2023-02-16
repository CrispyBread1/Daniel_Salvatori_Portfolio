import React, { useEffect } from "react"
import './cv.css'
import FrogBack from '../imgs/frog_back.png'
import Me from '../imgs/IMG_3439.JPG'


const CV = ({backToHome}) => {
    
    const gitHub = 'https://github.com/CrispyBread1'
    const linkedIn = 'https://www.linkedin.com/in/Daniel-Salvatori1999'

    const moveToHome = () => {
        const id = document.querySelector('[id="CV"]')
        backToHome(id.id)
    }


    return(
        
        <div id="CV" >
            <h3 className="CVToReturn" onClick={moveToHome}>click here to return</h3>
            <div className= "Frog-back-image-cv">
                <img src={FrogBack} width="130em" height="auto"/>
            </div>
            <div className="DescriptionAboutMe">
                <p>
                    'For a short time when I was fifteen I lived in China for the summer, and later spent a term abroad in Toronto, allowing me to confidently connect and communicate with people. I like to build on interpersonal experiences through social and constructive collaboration with others. In my free time I tend to be working on photography projects, designing/rebuilding old coding applications, reading or baking. When I was around ten my Grandad introduced to me my first programming language HTML. Using this I made a very basic fact website about  my favourite animal, penguins. Later in life I became fascinated by the idea of stocks, while everyone was sending ‘Blockbuster’ stock to the moon. This led me to become intrigued by the idea of implementing code to track, predict, buy and sell stocks. Thus leading me down the path I am now set on conquering, a career in software development.'
                </p>
            </div>
            <div className="PhotoMe">
                <img className="Photo" src={Me} width="130em" height="auto"/>
            </div>
            <div className="ContactDetails">
                <p className="Email">Email: dsalvatori2008@gmail.com</p>
                <ul className="ContactList">
                    {/* <li>Email: dsalvatori2008@gmail.com</li> */}
                    <li className="ContactLink"><a className="ContactMeLinks" href={gitHub}>GitHub</a></li>
                    <li className="ContactLink"><a className="ContactMeLinks" href={linkedIn}>LinkedIn</a></li>
                </ul>
            </div>
        </div>

    )
}

export default CV