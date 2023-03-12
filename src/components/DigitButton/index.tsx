import { StyledButton } from "../commonStyledComps";

interface DigitButtonProps {
  digit: number | ",";
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  return (
    <StyledButton digit={digit} onClick={() => console.log(digit)}>
      {digit}
    </StyledButton>
  );
};

export default DigitButton;
