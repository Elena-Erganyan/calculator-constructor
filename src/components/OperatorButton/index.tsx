import { chooseOperation } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledButton } from "../commonStyledComps";

interface OperatorButtonProps {
  operator: Operation;
}

const OperatorButton = ({ operator }: OperatorButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledButton onClick={() => dispatch(chooseOperation(operator))}>
      {operator}
    </StyledButton>
  );
};

export default OperatorButton;
