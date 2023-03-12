import { calculate } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledEqualButton } from "./styled";

const EqualButton = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledBlockWrapper draggable={true} style={{ height: "7.2rem" }}>
      <StyledEqualButton onClick={() => dispatch(calculate())}>
        =
      </StyledEqualButton>
    </StyledBlockWrapper>
  );
};

export default EqualButton;
