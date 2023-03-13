import { useAppSelector } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledDisplay } from "./styled";

const Display = () => {
  const display = useAppSelector((state) => state.calculator.display);

  return (
    <StyledBlockWrapper draggable={true} style={{ minHeight: "6rem" }}>
      <StyledDisplay>{display}</StyledDisplay>
    </StyledBlockWrapper>
  );
};

export default Display;
