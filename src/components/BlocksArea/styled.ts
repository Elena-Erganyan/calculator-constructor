import styled, { css } from "styled-components";

interface StyledBlocksAreaProps {
  mode: Mode;
}

export const StyledBlocksArea = styled.div<StyledBlocksAreaProps>`
  ${({ mode }) =>
    mode === "runtime" &&
    css`
      visibility: hidden;
    `};
  display: grid;
  justify-self: end;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.2rem;
  width: 24rem;
  height: 44.8rem; // temporarily
`;
