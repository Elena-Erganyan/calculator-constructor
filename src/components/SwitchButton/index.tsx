import { useTheme } from "styled-components";
import { clear } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledSwitchButton, StyledSwitchLabel } from "./styled";

interface SwitchButtonProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const SwitchButton = ({ mode, setMode }: SwitchButtonProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleOnConstructorClick = () => {
    setMode("constructor");
    dispatch(clear());
  };

  return (
    <StyledSwitchButton>
      <input
        checked={mode === "runtime"}
        id="runtime"
        name="toggle"
        onChange={() => setMode("runtime")}
        type="radio"
        value="runtime"
      />
      <StyledSwitchLabel htmlFor="runtime">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
            stroke={mode === "runtime" ? theme.electric : theme.darkGray}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z"
            stroke={mode === "runtime" ? theme.electric : theme.darkGray}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Runtime</span>
      </StyledSwitchLabel>
      <input
        checked={mode === "constructor"}
        id="constructor"
        name="toggle"
        onChange={handleOnConstructorClick}
        type="radio"
        value="constructor"
      />
      <StyledSwitchLabel htmlFor="constructor">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50002 13.3333L4.16669 10L7.50002 6.66668M12.5 6.66668L15.8334 10L12.5 13.3333"
            stroke={mode === "constructor" ? theme.electric : theme.darkGray}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Constructor</span>
      </StyledSwitchLabel>
    </StyledSwitchButton>
  );
};

export default SwitchButton;
