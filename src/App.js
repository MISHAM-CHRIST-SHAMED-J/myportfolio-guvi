import './App.css';
import Home from './Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Subhome from './Subhome';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Subhome />}>
          <Route path="/home/about" element={<About />} />
          <Route path="/home/resume" element={<Resume />} />
          <Route path="/home/contact" element={<Contact />} />
          <Route path="/home/project" element={<Project />} />
        </Route>
          </Routes>
  </BrowserRouter>
      
    
  );
}

export default App;
