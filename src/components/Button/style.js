import styled from 'styled-components';

export const ButtonLink = styled.a`
  transition: 0.4s ease-in-out;
  position: relative;
  display: inline-block;
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
  padding: 0.8em 2em 0.8em 2em;
  font-size: 1.1em;
  width: 14em;
  &:hover {
    width: 15em;
  }
`;