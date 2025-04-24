// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      services: "Our Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      learnMore: "Learn More",

      // About
      aboutTitle: "Reliable and Result-Oriented",
      aboutDescription:
        "We bring a unique perspective to every project, working to best reflect your business. Our goal is not just to meet expectations, but to deliver work that pushes boundaries.",
      contactWhatsapp: "Contact via Whatsapp",

      // Services
      servicesTitle: "Our Services",
      servicesMainTitle1: "UI/UX Design",
      servicesSubTitle1:
        "We provide creative UI/UX solutions tailored to your project. We prioritize functionality and aesthetics for an ideal user experience.",

      // Projects
      projectsData: {
        project1: {
          title: "Digital Showroom",
          description:
            "Imagine an environment where the texture of your products can be felt digitally. Go beyond mockup designs and showcase your product catalog professionally.",
        },
        project2: {
          title: "Measure, Realize, Improve",
          description:
            "Let’s measure and analyze the situations you want to monitor in your company and digitize them. Visualize your performance metrics and offer improvement suggestions.",
        },
        project3: {
          title: "Game Development",
          description:
            "With the games and simulation projects we developed, we reached over 10 million users worldwide. Whether with your game idea or internal simulations, prepare your team.",
        },
        project4: {
          title: "Lorem Ipsum",
          description:
            "Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur...",
        },
      },

      // Blog
      blogPosts: {
        post1Title: "Introduction Event",
        post1Text: "We organized our first event as Denizli Coders...",
        post2Title: "Docker-101 Training",
        post2Text: "We learned the basics of Docker...",
        post3Title: "Career Conversations",
        post3Text: "Kerem Atam shared his experiences in the sector...",
        post4Title: "Git and Github Training",
        post4Text: "We learned the basics of Git and Github...",
      },

      // Contact / Form
      contactTitle: "Contact Us",
      fullName: "Full Name",
      phone: "Phone",
      email: "Email",
      company: "Company Name (optional)",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      fullNameError: "Full name is required",
      emailError: "Please enter a valid email",
      messageError: "Message is required",
      thankYou: "Thank you!",
      formSuccessMessage:
        "Your message has been sent successfully. We will get back to you as soon as possible.",
      sendNewMessage: "Send New Message",
      formSubmitError: "Form could not be submitted. Please try again later.",
      formUnknownError: "An error occurred. Please try again.",

      // Footer
      footer: {
        about: "ABOUT",
        company: "Our Company",
        mission: "Our Mission",
        contact: "Contact",
        services: "SERVICES",
        consulting: "Consulting",
        software: "Software",
        design: "Design",
        resources: "RESOURCES",
        blog: "Blog",
        announcements: "Announcements",
        docs: "Docs",
        description:
          "We bring creative solutions for your projects, going beyond expectations.",
      },
    },
  },
  tr: {
    translation: {
      // Navbar
      services: "Hizmetlerimiz",
      projects: "Projelerimiz",
      blog: "Blog",
      contact: "İletişim",
      learnMore: "Daha Fazla Öğren",

      // About
      aboutTitle: "Güvenilir ve Sonuç Odaklı",
      aboutDescription:
        "Her projeye özel bir bakış açısı getiriyor, işinizi en iyi şekilde yansıtmak için çalışıyoruz. Hedefimiz sadece beklentileri karşılamak değil, sınırları aşan işler ortaya koymak.",
      contactWhatsapp: "Whatsapp'tan iletişime geç",

      // Services
      servicesTitle: "Hizmetlerimiz",
      servicesMainTitle1: "UI/UX Tasarımı",
      servicesSubTitle1:
        "Projenize özel yaratıcı UI/UX çözümleri sunuyoruz. Kullanıcı deneyimi açısından işlevselliği ve estetiği ön planda tutuyoruz.",

      // Projects
      projectsData: {
        project1: {
          title: "Dijital Showroom",
          description:
            "Ürünlerinizin dokusunun dijitalde hissedildiği bir ortam düşünün. Mockup tasarımların ötesinde ürün kataloğunuzu profesyonelce sergileyin.",
        },
        project2: {
          title: "Ölç, Fark et, Geliştir",
          description:
            "Şirketinizde takip etmek istediğiniz durumları ölçüp analiz edelim. Performans metriklerinizi görselleştirelim, geliştirme önerileri sunalım.",
        },
        project3: {
          title: "Oyun Geliştirme",
          description:
            "Geliştirdiğimiz oyunlar ve simülasyon projeleriyle Dünya genelinde 10 milyondan fazla kullanıcıya ulaştık.",
        },
        project4: {
          title: "Lorem Ipsum",
          description:
            "Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur...",
        },
      },

      // Blog
      blogPosts: {
        post1Title: "Tanışma Etkinliği",
        post1Text: "Denizli Coders olarak ilk etkinliğimizi düzenledik...",
        post2Title: "Docker-101 Eğitimi",
        post2Text: "Docker'ın temellerini öğrendik...",
        post3Title: "Kariyer Sohbetleri",
        post3Text: "Kerem Atam sektördeki deneyimlerini paylaştı...",
        post4Title: "Git ve Github Eğitimi",
        post4Text: "Git ve Github'ın temellerini öğrendik...",
      },

      // Contact / Form
      contactTitle: "Bize Ulaşın",
      fullName: "İsim, Soyisim",
      phone: "Telefon",
      email: "Email",
      company: "Şirket İsmi (varsa)",
      message: "Mesaj",
      send: "Gönder",
      sending: "Gönderiliyor...",
      fullNameError: "İsim, soyisim alanı zorunludur",
      emailError: "Geçerli bir e-posta adresi giriniz",
      messageError: "Mesaj alanı zorunludur",
      thankYou: "Teşekkürler!",
      formSuccessMessage:
        "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.",
      sendNewMessage: "Yeni Mesaj Gönder",
      formSubmitError: "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      formUnknownError: "Bir hata oluştu. Lütfen tekrar deneyin.",

      // Footer
      footer: {
        about: "HAKKIMIZDA",
        company: "Şirketimiz",
        mission: "Misyonumuz",
        contact: "İletişim",
        services: "HİZMETLER",
        consulting: "Danışmanlık",
        software: "Yazılım",
        design: "Tasarım",
        resources: "KAYNAKLAR",
        blog: "Blog",
        announcements: "Duyurular",
        docs: "Belgeler",
        description:
          "Projeleriniz için yaratıcı çözümler sunuyor, beklentilerin ötesine geçiyoruz.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
