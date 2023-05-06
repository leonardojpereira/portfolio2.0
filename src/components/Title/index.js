import { TitleText, AfterContainer, After, Square, SecondAfter } from "./style";

export default function Title({ children, color }) {
  return (
    <header>
      <TitleText color>{children}</TitleText>
      <AfterContainer>
        <After />
        <Square />
        <SecondAfter />
      </AfterContainer>
    </header>
  );
}
