import Digits from "../Digits";
import Display from "../Display";
import EqualButton from "../EqualButton";
import Operators from "../Operators";
import { StyledBlocksArea } from "./styled";

interface BlocksAreaProps {
  mode: Mode;
}

const BlocksArea = ({ mode }: BlocksAreaProps) => {
  return (
    <StyledBlocksArea mode={mode}>
      <Display info={0} />
      <Operators />
      <Digits />
      <EqualButton />
    </StyledBlocksArea>
  );
};

export default BlocksArea;
