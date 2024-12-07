import styled from 'styled-components';

export const ContactMeSection = styled.section`
    background-color: #303030;
    color: #fff;
    text-shadow: -1px -1px 0px #181818;
    background-image: url(images/bg.png);
    box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    padding: 8em 0 5em 0;
    text-align: center;
`;

export const Container = styled.div`
        margin: 0 auto;
    max-width: calc(100% - 50px);
    width: 1200px;
`;


export const Header = styled.header`
    margin: 0 0 3em 0;
`;

export const Subtitle = styled.p`
        font-size: 1.25em;
        margin-top: 22px;
        color: #999;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
    justify-content: center;

`;

export const Column = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    
`;

export const FormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
    gap: 25px;
    
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 25px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    border: none;
    background-color: #282828;
    display: block;
    padding: 0.75em;
    font-size: 1em;
    border-radius: 8px;
    color: #bbb;
    box-shadow: inset 0px 2px 3px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(255, 255, 255, 0.025);
    width: 100%;
    line-height: 1.85em;
    font-weight: 300;
    font-size: 18px;
    outline: none;
    
`;


export const TextArea = styled.textarea`
    border: none;
    background: #282828;
    height: 15em;
    display: block;
    border: 0;
    padding: 0.75em;
    font-size: 1em;
    border-radius: 8px;
    color: #bbb;
    box-shadow: inset 0px 2px 3px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(255, 255, 255, 0.025);
    width: 100%;
    outline: none;
`;

export const ButtonContainer = styled.div`
    
`;

export const UlContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media screen  and (max-width: 435px) {
    width: 100%;
  }
`;

export const Button = styled.li`
    display: inline-block;
    @media screen  and (max-width: 435px) {
    width: 100%;
  }
`;

export const InputButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff !important;
    text-decoration: none;
    font-weight: 700;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${props => props.backgroundColor || 'rgb(255 138 0)'};
    padding: 1em 2.35em 1em 2.35em;
    font-size: 1.1em;
    max-width: 24em;
    gap: 6px;
    transition: ease .3s;
    &:hover {
        opacity: 0.8;
    }
    @media screen  and (max-width: 435px) {
    width: 100%;
    max-width: 100%;

  }
`;





