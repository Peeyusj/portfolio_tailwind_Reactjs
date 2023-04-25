
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import  {Portfolio}  from './components/Portfolio';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="App">
 <Navbar/>
 <SocialIcons/>
 <Home/>
 <About/>
 <Portfolio/>
    </div>
  
);
}

export default App;
