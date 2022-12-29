import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Anotherpage from './pages/Anotherpage/Anotherpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/anotherpage' element={<Anotherpage />} />
      </Routes>
  </Router>
  );
}

export default App;
