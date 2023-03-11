import OperatorButton from "../OperatorButton";
import { StyledOperatorsWrapper } from "./styled";

const Operators = () => {
  return (
    <StyledOperatorsWrapper draggable={true}>
      <OperatorButton operator="/" />
      <OperatorButton operator="x" />
      <OperatorButton operator="-" />
      <OperatorButton operator="+" />
    </StyledOperatorsWrapper>
  );
};

export default Operators;
