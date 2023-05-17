import { useState } from "react";
import Footer from "../Footer";
import SocialMedia from "../SocialMedia";
import Title from "../Title";
import { ContactMeSection, Container, Header, Subtitle, Row, Column, Form, FormRow, InputContainer, Input, TextArea, UlContainer, Button, InputButton } from './style';
import emailJS from '@emailjs/browser';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineClear } from 'react-icons/ai';
import { toast } from "react-toastify";

export default function ContactMe() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        const templateParans = {
            from_name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailJS.send("service_hji6hvj", "template_d43uhi3", templateParans, "Spo-uQkYUz_EfELn0")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                toast.success("Mensagem enviada!");
            }, (err) => {
                console.log("ERROR:", err);
                toast.error("Desculpe, não foi possível enviar a mensagem :/");
            })

    }

    function handleClean() {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <ContactMeSection id="contact">
            <Container data-aos="fade-up">
                <Header>
                    <Title>Contate-me!</Title>
                    <Subtitle>Fique a vontade para me mandar uma mensagem :)</Subtitle>
                </Header>
                <Row>
                    <Column>
                        <Form onSubmit={sendEmail}>
                            <FormRow>
                                <InputContainer>
                                    <Input type="text" name="name" placeholder="Nome" required value={name} onChange={(e) => { setName(e.target.value) }} />
                                    <Input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </InputContainer>
                                <Column>
                                    <Input type="text" name="subject" autoComplete="off" placeholder="Assunto" required value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                                </Column>
                                <Column>
                                    <TextArea autoComplete="off" name="message" placeholder="Mensagem" value={message} onChange={(e) => { setMessage(e.target.value) }} required />
                                </Column>
                                <Column>
                                    <UlContainer>
                                        <Button>
                                            <InputButton type="submit" value="Enviar mensagem"><FaTelegramPlane size={22}/>Enviar mensagem</InputButton>
                                        </Button>
                                        <Button>
                                            <InputButton type="reset" backgroundColor="#444" onClick={handleClean}><AiOutlineClear size={22}/>Limpar</InputButton>
                                        </Button>
                                    </UlContainer>
                                </Column>
                            </FormRow>
                        </Form>
                    </Column>
                    <SocialMedia />
                    <Footer />
                </Row>
            </Container>
        </ContactMeSection>
    );
} 