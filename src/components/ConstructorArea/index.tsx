import Calculator from "../Calculator";
import SwitchButton from "../SwitchButton";
import { StyledConstructorArea } from "./styled";

interface ConstructorAreaProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const ConstructorArea = ({ data, mode, setMode }: ConstructorAreaProps) => {
  return (
    <StyledConstructorArea>
      <SwitchButton mode={mode} setMode={setMode} />
      <Calculator data={data} />
    </StyledConstructorArea>
  );
};

export default ConstructorArea;
