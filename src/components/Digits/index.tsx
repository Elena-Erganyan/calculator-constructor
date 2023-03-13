import { Draggable } from "@hello-pangea/dnd";
import DigitButton from "../DigitButton";
import { StyledDigitsWrapper } from "./styled";

const Digits = () => {
  return (
    <Draggable draggableId="digits" index={2}>
      {(provided) => (
        <StyledDigitsWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {[...Array(10).keys()].map((digit) => (
            <DigitButton digit={`${digit}`} key={digit} />
          ))}
          <DigitButton digit="," />
        </StyledDigitsWrapper>
      )}
    </Draggable>
  );
};

export default Digits;
