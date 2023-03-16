import { addDigit } from "../../redux/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledButton } from "../commonStyledComps";

interface DigitButtonProps {
  digit: string;
}

const DigitButton = ({ digit }: DigitButtonProps) => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.calcConstructor.mode);
  const isDisabled = mode !== "runtime";

  return (
    <StyledButton
      digit={digit}
      disabled={isDisabled}
      onClick={() => dispatch(addDigit(digit))}
    >
      {digit}
    </StyledButton>
  );
};

export default DigitButton;
