import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import FrontSkills from './Pages/FrontSkills.jsx';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
   <>
   
   <Router>
   <Header/>
    <Routes>
    
      <Route path='/' element={<AboutMe/>}/>
      <Route path='/FrontSkills' element={<FrontSkills/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    
    </Routes>
    <Footer/>
   </Router>
   
   
   
   </>
  );
}

export default App;
