import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import DigitButton from "../DigitButton";
import { StyledDigitsWrapper } from "./styled";

interface DigitsProps {
  innerRef: (HTMLDivElement: HTMLDivElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps;
  style: React.CSSProperties;
}

const Digits = ({
  innerRef,
  draggableProps,
  dragHandleProps,
  style,
}: DigitsProps) => {
  return (
    <StyledDigitsWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={style}
    >
      {[...Array(10).keys()].map((digit) => (
        <DigitButton digit={`${digit}`} key={digit} />
      ))}
      <DigitButton digit="," />
    </StyledDigitsWrapper>
  );
};

export default Digits;
