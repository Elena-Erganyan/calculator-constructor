import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import { useAppSelector } from "../../redux/hooks";
import { selectDisplay } from "../../redux/calculatorSlice";
import { StyledDisplayWrapper, StyledDisplay } from "./styled";

interface DisplayProps {
  innerRef?: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  style?: React.CSSProperties;
}

const Display = ({
  innerRef,
  dragHandleProps,
  draggableProps,
  style,
}: DisplayProps) => {
  const display = useAppSelector(selectDisplay);

  return (
    <StyledDisplayWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={style}
    >
      <StyledDisplay>{display}</StyledDisplay>
    </StyledDisplayWrapper>
  );
};

export default Display;
