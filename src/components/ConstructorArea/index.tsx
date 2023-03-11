import Calculator from "../Calculator";
import SwitchButton from "../SwitchButton";
import { StyledConstructorArea } from "./styled";

interface ConstructorAreaProps {
  content: React.ReactNode[];
  mode: Mode;
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const ConstructorArea = ({
  content,
  mode,
  setContent,
  setMode,
}: ConstructorAreaProps) => {
  return (
    <StyledConstructorArea>
      <SwitchButton mode={mode} setMode={setMode} />
      <Calculator content={content} setContent={setContent} />
      {/* {mode === "constructor" ? <Calculator /> : <Constructor />} */}
    </StyledConstructorArea>
  );
};

export default ConstructorArea;
