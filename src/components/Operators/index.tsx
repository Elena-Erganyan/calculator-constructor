import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import OperatorButton from "../OperatorButton";
import { operators } from "./config";
import { StyledOperatorsWrapper } from "./styled";

interface OperatorsProps {
  innerRef?: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  style?: React.CSSProperties;
}

const Operators = ({
  innerRef,
  draggableProps,
  dragHandleProps,
  style,
}: OperatorsProps) => {
  return (
    <StyledOperatorsWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={style}
    >
      {operators.map((op) => (
        <OperatorButton key={op} operator={op} />
      ))}
    </StyledOperatorsWrapper>
  );
};

export default Operators;
