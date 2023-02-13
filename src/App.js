import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/homePage';
import NavBar from './components/navBar';
import CV from './containers/cv';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={HomePage}/>
          <Route exact path="/cv" element={CV}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
