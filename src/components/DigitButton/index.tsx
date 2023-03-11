import { StyledButton } from "../commonStyledComps";

interface DigitButtonProps {
  digit: number | ",";
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    
  };

  return (
    <StyledButton digit={digit} onClick={handleOnClick}>
      {digit}
    </StyledButton>
  );
};

export default DigitButton;
