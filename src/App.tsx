import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import CommunicationForm from "./components/CommunicationForm";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Projects from "./components/Projects";
import background_items from "./assets/Background items.png";
import rocketImage from "./assets/Uzay.png";
import Blogimages from "./assets/blog.png";
import MouseTracker from "./components/MouseTracker";

function App() {
  return (
    <>
      <Navbar />

      <section id="about">
        <About
          title={"Güvenilir ve Sonuç Odaklı"}
          background_items={background_items}
        />
      </section>

      <section id="projects">
        <Projects title={"Projects"} />
      </section>

      <section id="services">
        <Services
          servicesTitle={"Hizmetlerimiz"}
          rocketImage={rocketImage}
          mainTitle1={"UI/UX Design"}
          subTitle1={
            "Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur. Elit proident et proident est anim et fugiat consectetur reprehenderit veniam dolore ut sint aliqua eu."
          }
        />
      </section>

      <section id="blog">
        <Blog title={"Blog"} blogimage={Blogimages} />
      </section>

      <section id="contact">
        <CommunicationForm title={"CommunicationForm"} />
      </section>

      <Footer title={"Footer"} />
      <MouseTracker />
    </>
  );
}

export default App;
