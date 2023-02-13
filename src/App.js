import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './containers/homePage';
import NavBar from './components/navBar';
import CV from './containers/cv';
import ProjectBoard from './components/projectBoard';
import backgroundimage from './imgs/playaround.jpg'

function App() {
  return (
    <div id="App">
      <h1 id="Title">Daniel Salvatori's Portfolio</h1>
      <Router>
        <NavBar id="NavBar"/>
        <Routes>
          <Route exact path="Daniel_Salvatori_Portfolio/" element={<HomePage/>}></Route>
          <Route exact path="Daniel_Salvatori_Portfolio/cv" element={<CV/>}></Route>
          <Route exact path="Daniel_Salvatori_Portfolio/project_board" element={<ProjectBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
