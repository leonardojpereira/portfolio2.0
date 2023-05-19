import { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailJS from "@emailjs/browser";
import { toast } from "react-toastify";

//hook para ativar animação das barrinhas de skills mo componente AboutMe
export const useAnimation = () => {
  const [inView, setInView] = useState(false);

  const getAnimationWidth = (score) => {
    if (inView) {
      return score;
    }
    return "0%";
  };

  const { ref } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0.3,
    onChange: (inView) => {
      setInView(inView);
    },
  });

  return {
    getAnimationWidth,
    ref,
    inView,
  };
};

// hook para enviar email no componente ContactMe
export const useSendEmail = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParans = {
      from_name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailJS
      .send(
        "service_hji6hvj",
        "template_d43uhi3",
        templateParans,
        "Spo-uQkYUz_EfELn0"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          toast.success("Mensagem enviada!");
        },
        (err) => {
          console.log("ERROR:", err);
          toast.error("Desculpe, não foi possível enviar a mensagem :/");
        }
      );
  }

  function handleClean() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return {
    sendEmail,
    name,
    setName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    handleClean,
  };
};
