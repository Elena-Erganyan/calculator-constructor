import DigitButton from "../DigitButton";
import { StyledDigitsWrapper } from "./styled";

const Digits = () => {
  return (
    <StyledDigitsWrapper draggable={true}>
      {[...Array(10).keys()].map((digit) => (
        <DigitButton digit={`${digit}`} key={digit} />
      ))}
      <DigitButton digit="," />
    </StyledDigitsWrapper>
  );
};

export default Digits;
