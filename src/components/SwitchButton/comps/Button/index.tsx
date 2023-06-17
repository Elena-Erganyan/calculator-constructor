import { toggleMode } from "../../../../redux/calcConstructorSlice";
import { clear } from "../../../../redux/calculatorSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import Eye from "../SVGIcons/Eye";
import Selector from "../SVGIcons/Selector";
import { StyledSwitchInput, StyledSwitchLabel } from "./styled";

interface ButtonProps {
  mode: Mode;
  label: Mode;
}

const Button = ({ mode, label }: ButtonProps) => {
  const dispatch = useAppDispatch();
  const Icon = label === "constructor" ? Eye : Selector;

  const handleOnClick = () => {
    dispatch(toggleMode(label));
    if (label === "constructor") {
      dispatch(clear());
    }
  };

  return (
    <>
      <StyledSwitchInput
        checked={mode === label}
        id={label}
        name="toggle"
        onChange={handleOnClick}
        type="radio"
        value={label}
      />
      <StyledSwitchLabel htmlFor={label}>
        <Icon mode={mode} />
        <span>{label}</span>
      </StyledSwitchLabel>
    </>
  );
};

export default Button;
