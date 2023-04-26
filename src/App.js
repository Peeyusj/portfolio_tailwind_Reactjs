
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import  {Portfolio}  from './components/Portfolio';
import Skills from './components/Skills';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
 <Navbar/>
 <SocialIcons/>
 <Home/>
 <About/>
 <Portfolio/>
 <Skills/>
 <Contact/>
    </div>
  
);
}

export default App;
