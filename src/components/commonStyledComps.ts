import styled, { css } from "styled-components";

interface StyledButtonProps {
  digit?: string;
}

export const StyledBlockWrapper = styled.div`
  display: grid;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 6px 0px #0000001a, 0px 2px 4px 0px #0000000f;
  cursor: move;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ digit }) =>
    digit !== undefined &&
    css`
      grid-area: ${digit === "," ? "comma" : `d${digit}`};
    `}
  height: 4.8rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 0.6rem;
  font-family: "Inter Medium", sans-serif;
  font-size: 1.4rem;
  line-height: 1.07;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.electric};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.lightGray};
  }
`;
