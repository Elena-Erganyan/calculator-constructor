import { useRef } from "react";
import { useTheme } from "styled-components";
import {
  StyledConstructorField,
  StyledConstructorTitle,
  StyledConstructorText,
} from "./styled";

interface ConstructorFieldProps {
  title: string;
  text: string;
  image: string;
}

const ConstructorField = ({ title, text, image }: ConstructorFieldProps) => {
  const theme = useTheme();
  const fieldRef = useRef<HTMLDivElement>(null);

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    fieldRef!.current.style.backgroundColor = theme.sky;
  };

  return (
    <StyledConstructorField onDragOver={handleOnDragOver} ref={fieldRef}>
      <img alt="Icon" src={image} />
      <StyledConstructorTitle>{title}</StyledConstructorTitle>
      <StyledConstructorText>{text}</StyledConstructorText>
    </StyledConstructorField>
  );
};

export default ConstructorField;
