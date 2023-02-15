import './App.css';
import React, { useState } from 'react';
import HomePage from './containers/homePage';
import CV from './containers/cv';
import ProjectBoard from './containers/projectBoard';



function App() {

  const [home, setHome] = useState(true)
  const [cv, setCv] = useState(false)
  const [projects, setProjects] = useState(false)

  

  
  const moveBackground = (id) => {
    setHome(false)
    if(id === 'CV') {
      setCv(true)
      let background = document.querySelector(".Background");
      background.classList.toggle("zoomright");
    } else if (id === 'Project') {
      setProjects(true)
      let background = document.querySelector(".Background");
      background.classList.toggle("zoomleft")
    }
  }

  const backToHome = (id) => {
    setHome(true)
    if(id === 'CV') {
      setCv(false)
      let background = document.querySelector(".Background");
      background.classList.toggle("zoomright");
    } else if (id === 'Project') {
      setProjects(false)
      let background = document.querySelector(".Background");
      background.classList.toggle("zoomleft");
    }
    
}
  const timerForFrogLeft = () => {
    // moveFroggyLeft()
    setTimeout(moveBackground, 2000)
  }




  return (
    <div className="Background">
    <h1>i am always renderd</h1>
    

        <div className="rednering-pages">
          {home && <HomePage moveBackground={moveBackground}/>}
          {!home && !projects &&  <CV backToHome={backToHome}/>}
          {!home && !cv && <ProjectBoard backToHome={backToHome}/>}
        </div>
     
    
    </div>
  );
}

export default App;
