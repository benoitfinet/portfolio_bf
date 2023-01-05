import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Experience from './pages/Experience/Experience';
import ContactMe from './pages/ContactMe/ContactMe';
import PortFolio from './pages/PortFolio/PortFolio';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contactMe' element={<ContactMe />} />
        <Route path='/portFolio' element={<PortFolio />} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
