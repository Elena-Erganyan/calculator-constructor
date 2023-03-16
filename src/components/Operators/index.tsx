import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import OperatorButton from "../OperatorButton";
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
      <OperatorButton operator="/" />
      <OperatorButton operator="x" />
      <OperatorButton operator="-" />
      <OperatorButton operator="+" />
    </StyledOperatorsWrapper>
  );
};

export default Operators;
