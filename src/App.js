import { useEffect } from "react";

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./GlobalStyle";
import "./style.css";
import Certification from "./components/Certifications";
import ExperienceList from "./components/Experiences/experienceList";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} pauseOnHover={false} />
      <GlobalStyle />
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
      <ExperienceList />
      <Certification />
      <ContactMe />
    </>
  );
}

export default App;
