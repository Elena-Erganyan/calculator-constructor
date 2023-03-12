import { addDigit } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledButton } from "../commonStyledComps";

interface DigitButtonProps {
  digit: string;
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledButton digit={digit} onClick={() => dispatch(addDigit(digit))}>
      {digit}
    </StyledButton>
  );
};

export default DigitButton;
