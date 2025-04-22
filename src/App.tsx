import "./App.css";
import "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import CommunicationForm from "./components/CommunicationForm";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CookieConsent from "react-cookie-consent";
import background_items from "./assets/Background items.png";
import rocketImage from "./assets/Uzay.png";
import Blogimages from "./assets/blog.png";
import MouseTracker from "./components/MouseTracker";
import DatingEvent from "./assets/DatingEvents.jpg";
import Docker from "./assets/Docker.jpg";
import CareerConversations from "./assets/CareerConversations.jpg";
import Github from "./assets/Github.jpg";

function App() {
  return (
    <>
      <div>
        <CookieConsent
          location="bottom"
          buttonText={"Kabul Et"}
          declineButtonText={"Reddet"}
          enableDeclineButton
          cookieName="MozenaCookieConsent"
          style={{ background: "#0000cd", color: "#fff", textAlign: "center" }}
          buttonStyle={{
            background: "#000080",

            color: "#fff",

            fontSize: "14px",
          }}
          declineButtonStyle={{
            background: "#fff",

            color: "#000080",

            fontSize: "14px",
          }}
          expires={150}
        >
          {
            "İçeriği kişiselleştirmek, reklamları daha uygun hale getirmek ve etkileşimi ölçmek amacıyla çerezler ve benzeri teknolojiler kullanıyoruz. 'Kabul Et' butonuna tıklayarak, Çerez Politikamızda belirtilen şartları kabul etmiş olursunuz. Daha iyi bir deneyim için bize katılın!"
          }
        </CookieConsent>
      </div>

      <Navbar />
      <section id="about">
        <About
          title={"Güvenilir ve Sonuç Odaklı"}
          background_items={background_items}
          rocket_image={rocketImage}
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
        <Blog
          title={"Blog"}
          blogimage={Blogimages}
          posts={[
            {
              content_title: "Tanışma Etkinliği",
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
              image: CareerConversations,
            },
            {
              content_title: "Git ve Github Eğitimi",
              text: "Bu eğitimde Git ve Github'ın temellerini öğrenerek versiyon kontrol sistemleri hakkında bilgi sahibi olduk.",
              image: Github,
            },
          ]}
        />
      </section>
      <section id="contact">
        <CommunicationForm title={"CommunicationForm"} />
      </section>

      <Footer brandName="Mozena" accentColor="bg-red-500" />
      <MouseTracker />
    </>
  );
}

export default App;
