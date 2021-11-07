import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './components/header/header';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
