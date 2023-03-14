import OperatorButton from "../OperatorButton";
import { StyledOperatorsWrapper } from "./styled";

const Operators = ({innerRef, draggableProps, dragHandleProps}) => {
  return (
    <StyledOperatorsWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      <OperatorButton operator="/" />
      <OperatorButton operator="x" />
      <OperatorButton operator="-" />
      <OperatorButton operator="+" />
    </StyledOperatorsWrapper>
  );
};

export default Operators;
