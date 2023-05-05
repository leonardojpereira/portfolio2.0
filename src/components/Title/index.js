import { TitleText, AfterContainer, After, Square, SecondAfter } from "./style";

export default function Title({ children }) {
  return (
    <header>
      <TitleText>{children}</TitleText>
      <AfterContainer>
        <After />
        <Square />
        <SecondAfter />
      </AfterContainer>
    </header>
  );
}
