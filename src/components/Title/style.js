import styled, { keyframes } from "styled-components";

export const TitleText = styled.h2`
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color || "#000"};
`;

export const AfterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  transform: perspective(500px);
`;

export const After = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 12px;
  background-color: rgb(255 138 0);
`;

const rotate = keyframes`
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
`;

export const Square = styled.div`
  width: 15px;
  height: 15px;
  background-color: rgb(255 138 0);
  animation: ${rotate} 2s infinite;
`;

export const SecondAfter = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 12px;
  background-color: rgb(255 138 0);
`;
