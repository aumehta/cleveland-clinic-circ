import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import Research from './Research';
import News from './News';



function App() {
  return (
    <div>
          <NavBar />
          <div className="pages">
            <Routes >
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />

            </Routes>
          </div>
          <Footer />
          </div>
        
  );
}

export default App;
