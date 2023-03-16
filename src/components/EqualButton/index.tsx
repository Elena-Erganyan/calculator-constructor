import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import { calculate } from "../../redux/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledEqualButtonWrapper, StyledEqualButton } from "./styled";

interface EqualButtonProps {
  innerRef: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps;
  style: React.CSSProperties;
}

const EqualButton = ({
  innerRef,
  draggableProps,
  dragHandleProps,
  style,
}: EqualButtonProps) => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.calcConstructor.mode);
  const isDisabled = mode !== "runtime";

  return (
    <StyledEqualButtonWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={style}
    >
      <StyledEqualButton
        disabled={isDisabled}
        onClick={() => dispatch(calculate())}
      >
        =
      </StyledEqualButton>
    </StyledEqualButtonWrapper>
  );
};

export default EqualButton;
