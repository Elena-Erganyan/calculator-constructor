import { selectMode } from "../../redux/calcConstructorSlice";
import { useAppSelector } from "../../redux/hooks";
import { StyledSwitchButton } from "./styled";
import Button from "./comps/Button";

const SwitchButton = () => {
  const mode = useAppSelector(selectMode);

  return (
    <StyledSwitchButton>
      <Button label="runtime" mode={mode} />
      <Button label="constructor" mode={mode} />
    </StyledSwitchButton>
  );
};

export default SwitchButton;
