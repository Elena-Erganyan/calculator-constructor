import { calculate } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledEqualButton } from "./styled";

const EqualButton = ({innerRef, draggableProps, dragHandleProps }) => {
  const dispatch = useAppDispatch();

  return (
    <StyledBlockWrapper
      ref={innerRef}
      style={{ height: "7.2rem" }}
      {...draggableProps}
      {...dragHandleProps}
    >
      <StyledEqualButton onClick={() => dispatch(calculate())}>
        =
      </StyledEqualButton>
    </StyledBlockWrapper>
  );
};

export default EqualButton;
