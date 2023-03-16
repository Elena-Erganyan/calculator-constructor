import { chooseOperation } from "../../redux/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledButton } from "../commonStyledComps";

interface OperatorButtonProps {
  operator: Operation;
}

const OperatorButton = ({ operator }: OperatorButtonProps) => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.calcConstructor.mode);
  const isDisabled = mode !== "runtime";

  return (
    <StyledButton
      disabled={isDisabled}
      onClick={() => dispatch(chooseOperation(operator))}
    >
      {operator}
    </StyledButton>
  );
};

export default OperatorButton;
