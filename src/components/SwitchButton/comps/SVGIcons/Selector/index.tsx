import { useTheme } from "styled-components";

interface SelectorProps {
  mode: Mode;
}

const Selector = ({ mode }: SelectorProps) => {
  const theme = useTheme();

  return (
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
  );
};

export default Selector;
