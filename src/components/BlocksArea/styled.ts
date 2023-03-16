import styled, { css } from "styled-components";

interface StyledBlocksAreaProps {
  mode?: Mode;
}

export const StyledBlocksArea = styled.div<StyledBlocksAreaProps>`
  ${({ mode }) =>
    mode === "runtime" &&
    css`
      visibility: hidden;
    `};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 44.8rem;
  width: 100%;
  max-width: 24rem;
`;
