import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import { useAppSelector } from "../../redux/hooks";
import { StyledDisplayWrapper, StyledDisplay } from "./styled";

interface DisplayProps {
  innerRef: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps;
  style: React.CSSProperties;
}

const Display = ({
  innerRef,
  dragHandleProps,
  draggableProps,
  style,
}: DisplayProps) => {
  const display = useAppSelector((state) => state.calculator.display);

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
