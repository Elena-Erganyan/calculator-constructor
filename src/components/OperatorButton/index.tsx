import { StyledButton } from "../commonStyledComps";

interface OperatorButtonProps {
  operator: string;
}

const OperatorButton = ({ operator }: OperatorButtonProps) => {
  return (
    <StyledButton onClick={() => console.log(operator)}>
      {operator}
    </StyledButton>
  );
};

export default OperatorButton;
