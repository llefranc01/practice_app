import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Webhooks from './components/pages/Webhooks';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Webhooks" element={<Webhooks/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
