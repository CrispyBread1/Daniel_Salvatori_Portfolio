import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './containers/homePage';
import CV from './containers/cv';
import ProjectBoard from './containers/projectBoard';


function App() {

  const [home, setHome] = useState(true)
  const [cv, setCv] = useState(false)
  const [projects, setProjects] = useState(false)

  const cvMoveToRight = () => {
    console.log('i am running bitch')
    setCv(true)
    setHome(false)
    // let id = null;
    // const app = document.getElementById("App");
    let background = document.querySelector(".Background");
    // background.addEventListener("click", () => {
    background.classList.toggle("zoomright");
    // });

    // let pos = 0;
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame() {
    //   if (pos == 1000) {
    //     clearInterval(id);
    //   } else {
    //     pos++; 
    //     app.style.top = pos + 'px'; 
    //   //  elem.style.
    //     app.style.left = pos + 'px'; 
    //     // console.log(elem.style.left)
    //     app.style.height = pos + 'px';
    //   }
    // }
  }

  const backToHomeFromCV = () => {
    let background = document.querySelector(".Background");
    background.classList.toggle("zoomright");
    setHome(true)
    setCv(false)
}

  const projectMoveToLeft = () => {
    setHome(false)
    setProjects(true)
    let background = document.querySelector(".Background");
    background.classList.toggle("zoomleft");
  }

  const backToHomeFromProject = () => {
    let background = document.querySelector(".Background");
    background.classList.toggle("zoomleft");
    setHome(true)
    setProjects(false)
}




  return (
    <div className="Background">
    <h1>i am always renderd</h1>
        <div className="rednering-pages">
          {home && <HomePage cvMoveToRight={cvMoveToRight} projectMoveToLeft={projectMoveToLeft}/>}
          {!home && !projects &&  <CV backToHome={backToHomeFromCV}/>}
          {!home && !cv && <ProjectBoard backToHome={backToHomeFromProject}/>}
        </div>
     
    
    </div>
  );
}

export default App;
