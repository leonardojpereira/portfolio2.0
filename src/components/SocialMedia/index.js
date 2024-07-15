import {
  Column,
  Line,
  SocialTitle,
  SocialContainer,
  SocialItem,
  SocialLink,
} from "./style";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <Column>
      <Line />
      <SocialTitle>Minhas redes sociais...</SocialTitle>
      <SocialContainer>
        <SocialItem>
          <SocialLink
            target="blank"
            href="https://www.linkedin.com/in/leonardobjpereira/"
            backgroundColor="#006599"
          >
            <FaLinkedinIn />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink
            target="blank"
            href="https://github.com/leonardojpereira"
            backgroundColor="#fff"
          >
            <AiFillGithub />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink
            target="blank"
            href="https://wa.me/13991121148"
            backgroundColor="#25D366"
          >
            <FaWhatsapp />
          </SocialLink>
        </SocialItem>
      </SocialContainer>
      <Line />
    </Column>
  );
}
