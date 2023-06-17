import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import OperatorButton from "../OperatorButton";
import { StyledBlockWrapper } from "../commonStyledComps";

interface EqualButtonProps {
  innerRef?: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  style?: React.CSSProperties;
}

const EqualButton = ({
  innerRef,
  draggableProps,
  dragHandleProps,
  style,
}: EqualButtonProps) => {
  return (
    <StyledBlockWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={style}
      operator="="
    >
      <OperatorButton operator="=" />
    </StyledBlockWrapper>
  );
};

export default EqualButton;
