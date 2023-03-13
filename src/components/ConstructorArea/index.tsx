import Calculator from "../Calculator";
import SwitchButton from "../SwitchButton";
import { StyledConstructorArea } from "./styled";

interface ConstructorAreaProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const ConstructorArea = ({ mode, setMode }: ConstructorAreaProps) => {
  return (
    <StyledConstructorArea>
      <SwitchButton mode={mode} setMode={setMode} />
      <Calculator />
    </StyledConstructorArea>
  );
};

export default ConstructorArea;
