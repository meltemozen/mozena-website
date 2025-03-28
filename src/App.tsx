import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/About';
import CommunicationForm from './components/CommunicationForm';
import Blog from './components/Blog';
import Services from './components/Services';
import Projects from './components/Projects';
import MouseTracker from './components/MouseTracker';
import DatingEvent from './assets/DatingEvents.jpg';
import Docker from './assets/Docker.jpg';
import CareerConversations from './assets/CareerConversations.jpg';
import Github from './assets/Github.jpg';

function App() {
  const background_items = "/assets/background_items.png"; 
  const rocketImage = "/assets/space.png"
  const Blogimages = "/assets/blog.png"
  return (
    <>

    <Navbar title={"Navbar"}/>
    <About title={"Güvenilir ve Sonuç Odaklı"}  background_items= {background_items} rocketImage={rocketImage}/>
    <Projects title={"Projects"}/>
    <Services servicesTitle={"Hizmetlerimiz"} rocketImage={rocketImage} mainTitle1={"UI/UX Design"} subTitle1={"Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur. Elit proident et proident est anim et fugiat consectetur reprehenderit veniam dolore ut sint aliqua eu."}/>
    <Blog title={"Blog"} blogimage={Blogimages}
     posts={[
      {content_title: "Tanışma Etkinliği",
        text: "Denizli Coders olarak ilk etkinliğimi düzenledik,Mert bey engin bilgilerini bize aktardı. ",
        image: DatingEvent,
      },
      {
        content_title: "Docker-101 Eğitimi",
        text: "Bu eğitimde Docker'ın temellerini öğrenerek konteyner teknolojileri hakkında  bilgi sahibi olduk.",
        image: Docker,
      },
      {
        content_title: "Kariyer Sohbetleri",
        text: " Kerem Atam, sektördeki deneyimlerini ve bu alanda başarılı olmanın ipuçlarını bizimle paylaştı.",
        image:CareerConversations,
      },
      {
        content_title: "Git ve Github Eğitimi",
        text: "Bu eğitimde Git ve Github'ın temellerini öğrenerek versiyon kontrol sistemleri hakkında bilgi sahibi olduk.",
        image:Github,
      },
     
    
    ] }
    
    
    
    
    />
    <CommunicationForm title={"CommunicationForm"}/>   
    <Footer title={"Footer"} />
    <MouseTracker />
    </>
  )
};

export default App
