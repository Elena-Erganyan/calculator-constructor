import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledEqualButton } from "./styled";

const EqualButton = () => {
  return (
    <StyledBlockWrapper draggable={true} style={{ height: "7.2rem" }}>
      <StyledEqualButton onClick={() => console.log("Result")}>
        =
      </StyledEqualButton>
    </StyledBlockWrapper>
  );
};

export default EqualButton;
