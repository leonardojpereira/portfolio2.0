import { TitleText, AfterContainer, After, Circle, SecondAfter } from './style';

export default function Title({ children }) {
  return (
    <header>
      <TitleText>{children}</TitleText>
      <AfterContainer>
        <After />
        <Circle />
        <SecondAfter />
      </AfterContainer>
    </header>
  );
}