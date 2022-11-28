import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
