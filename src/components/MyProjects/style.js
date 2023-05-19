import styled from "styled-components";

export const MyProjectsSection = styled.section`
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  padding: 8em 2em;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
  margin: 5em 0px 3em 0;
  @media screen  and (max-width: 700px) {
    font-size: 1.1em;
    grid-template-columns: repeat(1, 1fr);
  }
`;


export const SeeMore = styled.span`
color: #888;
font-size: 1.5em;
margin-bottom: 2em;
transition: 0.4s ease;
text-align: center;
&:hover {
  opacity: 0.8;
}
`;
