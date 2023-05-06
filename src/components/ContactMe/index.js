import Title from "../Title";
import { ContactMeSection, Container, Header, Subtitle, Row, Column, Form, FormRow, InputContainer, Input, TextArea, UlContainer, Button, InputButton } from './style';

export default function ContactMe() {
    return (
        <ContactMeSection>
            <Container>
                <Header>
                    <Title>Contate-me!</Title>
                    <Subtitle>Fique a vontade para me mandar uma mensagem :)</Subtitle>
                </Header>
                <Row>
                    <Column>
                        <Form action="https://api.staticforms.xyz/submit" method="post">
                            <FormRow>
                                <InputContainer>
                                    <Input type="text" name="name" placeholder="Nome" required/>
                                    <Input type="email" name="email" placeholder="Email" required/>
                                </InputContainer>
                                <Column>
                                    <Input type="text" name="subject" autoComplete="off" placeholder="Assunto" required/>
                                </Column>
                                <Column>
                                    <TextArea autoComplete="off" name="message" placeholder="Mensagem" required/>
                                </Column>
                                <Column>
                                    <UlContainer>
                                        <Button>
                                            <InputButton type="submit" value="Enviar mensagem"/>
                                        </Button>
                                        <Button>
                                            <InputButton backgroundColor="#444" type="reset" value="Limpar" />
                                        </Button>
                                    </UlContainer>
                                </Column>
                            </FormRow>
                            <input type="hidden" name="accessKey" value="f5a871bb-75fb-40ef-9896-e51a7a61682f"/>
                            <input type="hidden" name="redirectTo" value=""/>
                        </Form>
                    </Column>
                    <Column>

                    </Column>
                </Row>
            </Container>
        </ContactMeSection>
    );
} 