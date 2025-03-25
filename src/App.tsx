import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/About';
import CommunicationForm from './components/CommunicationForm';
import Blog from './components/Blog';
import Services from './components/Services';
import Projects from './components/Projects';
import background_items from "./assets/Background items.png"
import rocketImage from './assets/Uzay.png';

function App() {
  return (
    <>

    <Navbar title={"Navbar"}/>
    <About title={"Güvenilir ve Sonuç Odaklı"}  background_items= {background_items}/>
    <Projects title={"Projects"}/>
    <Services servicesTitle={"Hizmetlerimiz"} rocketImage={rocketImage} mainTitle1={"UI/UX Design"} subTitle1={"Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur. Elit proident et proident est anim et fugiat consectetur reprehenderit veniam dolore ut sint aliqua eu."}/>
    <Blog title={"Blog"}/>
    <CommunicationForm title={"CommunicationForm"}/>   
    <Footer title={"Footer"}/>
    </>
  )
};

export default App
