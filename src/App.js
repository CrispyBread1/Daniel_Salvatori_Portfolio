import './App.css';
import React, { useState } from 'react';
import HomePage from './containers/homePage';
import CV from './containers/cv';
import ProjectBoard from './containers/projectBoard';



function App() {

  const [home, setHome] = useState(true)
  const [cv, setCv] = useState(false)
  const [projects, setProjects] = useState(false)

  const [returned, setReturned] = useState(false)
  
  const moveBackground = (id) => {
    setHome(false)

    if(id === 'CV') {
      setCv(true)
      let background = document.querySelector(".Background");
      if(background.className !== "Background"){
        background.className = "Background"
        background.classList.toggle("zoomright")
      }else background.classList.toggle("zoomright");
      
    } else if (id === 'Project') {
      setProjects(true)
      let background = document.querySelector(".Background");
      if(background.className !== "Background"){
        background.className = "Background"
        background.classList.toggle("zoomleft")
      } else {background.classList.toggle("zoomleft")
        console.log(background.className)
      }
      
    }
    console.log(document.querySelector(".Background"))
  }

  const backToHome = (id) => {
    setTimeout(setHome(true), 1500)
    if(id === 'CV') {
      // setReturned(true)
      setCv(false)
      let background = document.querySelector(".Background");
      background.classList.toggle("out");
      if (background.className == "Background Out"){
        background.className = "Background"
      }
    } else if (id === 'Project') {
      setProjects(false)
      let background = document.querySelector(".Background");
      background.classList.toggle("out");
      if (background.className == "Background Out"){
        background.className = "Background"
      }
    }
  }

  return (
    <div className="Background">
    <h1>i am always renderd</h1>
    
        <div className="rednering-pages">
          {home && <HomePage moveBackground={moveBackground} returned={returned}/>}
          {!home && !projects &&  <CV backToHome={backToHome}/>}
          {!home && !cv && <ProjectBoard backToHome={backToHome}/>}
        </div>
    
    </div>
  );
}

export default App;
