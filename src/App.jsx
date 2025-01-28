import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
      <div className="App">
        <Header />
        <main className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }


export default App
