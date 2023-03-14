import DigitButton from "../DigitButton";
import { StyledDigitsWrapper } from "./styled";

const Digits = ({innerRef, draggableProps, dragHandleProps}) => {
  return (
    <StyledDigitsWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      {[...Array(10).keys()].map((digit) => (
        <DigitButton digit={`${digit}`} key={digit} />
      ))}
      <DigitButton digit="," />
    </StyledDigitsWrapper>
  );
};

export default Digits;
