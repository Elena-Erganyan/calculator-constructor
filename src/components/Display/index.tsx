import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledDisplay } from "./styled";

interface DisplayProps {
  info: number | string;
}
const Display = ({ info }: DisplayProps) => {
  return (
    <StyledBlockWrapper draggable={true} style={{ height: "6rem" }}>
      <StyledDisplay>{info}</StyledDisplay>
    </StyledBlockWrapper>
  );
};

export default Display;
