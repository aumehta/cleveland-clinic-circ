import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';

function App() {
  return (
    <div>
          <NavBar />
          <div className="pages">
            <Routes >
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          </div>
        
  );
}

export default App;
