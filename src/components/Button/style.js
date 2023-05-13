import styled from 'styled-components';

export const ButtonLink = styled.a`
  transition: 0.4s ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  text-decoration: none;
  font-weight: 700;
  border: none;
  outline: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background-color: #0083ff;
  height: ${props => props.height || '50px'};
  font-size: ${props => props.fontSize || '1.1em'};
  width: ${props => props.width || '14em'};
  &:hover {
    width: ${props => props.widthOnHover || '15em'};
  }
  @media screen and (max-width: 365px) {
    width: ${props => props.widthMobile || '13em'};
    font-size: ${props => props.fontSizeMobile || '1.1em'};
    &:hover {
      width: ${props => props.widthMobileHover || '14em'};
      font-size: ${props => props.fontSizeMobile};;
    }
  }
`;