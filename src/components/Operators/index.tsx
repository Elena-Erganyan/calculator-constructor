import { Draggable } from "@hello-pangea/dnd";
import OperatorButton from "../OperatorButton";
import { StyledOperatorsWrapper } from "./styled";

const Operators = () => {
  return (
    <Draggable draggableId="operators" index={1}>
      {(provided) => (
        <StyledOperatorsWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <OperatorButton operator="/" />
          <OperatorButton operator="x" />
          <OperatorButton operator="-" />
          <OperatorButton operator="+" />
        </StyledOperatorsWrapper>
      )}
    </Draggable>
  );
};

export default Operators;
