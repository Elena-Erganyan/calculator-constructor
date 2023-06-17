import { selectMode } from "../../redux/calcConstructorSlice";
import { calculate, chooseOperation } from "../../redux/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledButton } from "../commonStyledComps";

interface OperatorButtonProps {
  operator: Operation | "=";
}

const OperatorButton = ({ operator }: OperatorButtonProps) => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(selectMode);
  const isDisabled = mode !== "runtime";

  const handleOnClick = () => {
    dispatch(operator === "=" ? calculate() : chooseOperation(operator));
  };

  return (
    <StyledButton
      disabled={isDisabled}
      onClick={handleOnClick}
      operator={operator}
    >
      {operator}
    </StyledButton>
  );
};

export default OperatorButton;
