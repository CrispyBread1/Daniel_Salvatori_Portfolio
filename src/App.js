import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './containers/homePage';
import NavBar from './components/navBar';
import CV from './containers/cv';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={HomePage}></Route>
          <Route exact path="/cv" element={CV}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
