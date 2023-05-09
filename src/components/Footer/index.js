import { FooterContainer, CopyrightContainer, Item, ProfileLink } from './style';

export default function Footer() {
    return (
        <FooterContainer>
            <CopyrightContainer>
                <Item>@ Developed by <ProfileLink href="https://github.com/leonardojpereira">Leonardo Barbosa</ProfileLink></Item>
                <Item>2023</Item>
            </CopyrightContainer>
        </FooterContainer>
    );
}