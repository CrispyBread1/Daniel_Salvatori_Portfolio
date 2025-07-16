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
            <button className="CVToReturn" onClick={moveToHome} >Back</button>
            <div className= "Frog-back-image-cv">
                <img className="Frog-Back"src={FrogBack}/>
            </div>
            <div className="DescriptionAboutMe">
                <p>
                    'Software Engineer with a strong foundation in Ruby, Python, and web technologies. Skilled in cross-functional collaboration, end-to-end development, and delivering practical solutions to real business problems. Graduate of CodeClan's intensive software engineering program. Passionate about personal projects, photography, and continuous learning.'
                    {/* 'For a short time when I was fifteen I lived in China for the summer, and later spent a term abroad in Toronto, allowing me to confidently connect and communicate with people. I like to build on interpersonal experiences through social and constructive collaboration with others. In my free time I tend to be working on photography projects, designing/rebuilding old coding applications, reading or baking. My introduction to software developing was when my Grandad taught me HTML. Using this I made a very basic fact website about Penguins. Later in life during Covid I became increasingly fascinated by how the world works. Istrarted to teach myself Python but struggled to make progress until I took a massive leap and signed up to the intensive three month CodeClan professional software engineering course. I instantly loved coding, the creative problem solving and the logic of how everything fits together.' */}
                </p>
            </div>
            {/* <div className="PhotoMe">
                <img className="Photo" src={Me}/>
            </div> */}
            <div class="skills-section">
              <h2>Skills / Programming Languages</h2>
              <table class="skills-table">
                <tr>
                  <td>Ruby on Rails</td>
                  <td>JavaScript</td>
                  <td>Mongo DB</td>
                  <td>Git/GitHub</td>
                </tr>
                <tr>
                  <td>Python 3</td>
                  <td>React</td>
                  <td>SQL</td>
                  <td>Firebase</td>
                </tr>
                <tr>
                  <td>Flask</td>
                  <td>Node.js</td>
                  <td>HTML5</td>
                  <td>C#</td>
                </tr>
                <tr>
                  <td>Java</td>
                  <td>Express.js</td>
                  <td>CSS3</td>
                  <td>Hotwire/Stimulus</td>
                </tr>
                <tr>
                  <td>Supabase</td>
                  <td>Unity</td>
                  <td>Jinja</td>
                  <td>Service Now</td>
                </tr>
              </table>
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
