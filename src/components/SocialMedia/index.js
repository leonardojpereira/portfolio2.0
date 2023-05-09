import { Column, Line, SocialTitle, SocialContainer, SocialItem, SocialLink } from './style';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';


export default function SocialMedia() {
    return (
        <Column>
            <Line />
            <SocialTitle>Minhas redes sociais...</SocialTitle>
            <SocialContainer>
                <SocialItem>
                    <SocialLink target="blank" href="https://www.linkedin.com/in/leonardobjpereira/" backgroundColor="#006599">
                        <FaLinkedinIn />
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink target="blank" href="https://github.com/leonardojpereira" backgroundColor="#fff">
                        <AiFillGithub />
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink target="blank" href="https://www.instagram.com/leonardo.bpereira/" color="#fff" backgroundColor="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)">
                        <AiOutlineInstagram />
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink target="blank" href="https://www.facebook.com/leonardo.barbosa.96780671" backgroundColor="#3C5A98">
                        <FaFacebookF />
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink target="blank" href="https://wa.me/13991121148" backgroundColor="#25D366">
                        <FaWhatsapp />
                    </SocialLink>
                </SocialItem>
            </SocialContainer>
            <Line />
        </Column>
    );
}