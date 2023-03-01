import './App.css';
import MainContainer from './containers/MainContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <MainContainer/>
      </Router>
    </div>
  )
}

export default App;
