import { useAppSelector } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledDisplay } from "./styled";

const Display = () => {
  const value = useAppSelector((state) => state.calculator.value);

  return (
    <StyledBlockWrapper draggable={true} style={{ height: "6rem" }}>
      <StyledDisplay>{value}</StyledDisplay>
    </StyledBlockWrapper>
  );
};

export default Display;
