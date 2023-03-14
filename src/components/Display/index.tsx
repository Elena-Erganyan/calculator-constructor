import { useAppSelector } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledDisplay } from "./styled";

const Display = ({innerRef, dragHandleProps, draggableProps}) => {
  const display = useAppSelector((state) => state.calculator.display);

  return (
    <StyledBlockWrapper
      ref={innerRef}
      style={{ height: "6rem" }}
      {...draggableProps}
      {...dragHandleProps}
    >
      <StyledDisplay>{display}</StyledDisplay>
    </StyledBlockWrapper>
  );
};

export default Display;
