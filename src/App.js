import { useEffect } from "react";

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false
    });
  }, []);

  return (
    <>
        <Header/>
        <Home/>
        <AboutMe/>
        <MyProjects/>
        <ContactMe/>
    </>
  );
}

export default App;
