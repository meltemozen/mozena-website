import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/About';
import CommunicationForm from './components/CommunicationForm';
import Blog from './components/Blog';
import Services from './components/Services';
import Projects from './components/Projects';
import MouseTracker from './components/MouseTracker';
import background_items from "./assets/Background items.png";

function App() {
  return (
    <>

    <Navbar title={"Navbar"}/>
    <About title={"Güvenilir ve Sonuç Odaklı"}  background_items={background_items} />
    <Projects title={"Projects"}/>
    <Services title={"Services"}/>
    <Blog title={"Blog"}/>
    <CommunicationForm title={"CommunicationForm"}/>   
    <Footer title={"Footer"} />
    <MouseTracker />
    </>
  )
};

export default App
