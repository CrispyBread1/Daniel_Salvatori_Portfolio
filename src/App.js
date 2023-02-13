import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={HomePage}/>
      </Routes>
    </div>
  );
}

export default App;
