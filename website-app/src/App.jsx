import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />

      <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
