import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/About';
import CommunicationForm from './components/CommunicationForm';
import Blog from './components/Blog';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <>

    <Navbar title={"Navbar"}/>
    <About title={"About"}/>
    <Projects title={"Projects"}/>
    <Services title={"Services"}/>
    <Blog title={"Blog"}/>
    <CommunicationForm title={"CommunicationForm"}/>   
    <Footer title={"Footer"}/>
    </>
  )
};

export default App
