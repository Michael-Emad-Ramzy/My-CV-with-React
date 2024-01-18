export default function Sections({
  buttons,
  children,
  ButtonContainer = "menu",
}) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
