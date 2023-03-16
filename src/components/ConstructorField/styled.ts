import styled, { css } from "styled-components";
import { StyledBlocksArea } from "../BlocksArea/styled";

interface StyledConstructorFieldProps {
  isEmpty: boolean;
}

export const setStyledConstructorField = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.4rem;
  border-radius: 0.6rem;
  border: 2px dashed ${({ theme }) => theme.gray};
  height: 44.8rem;
  text-align: center;

  img {
    margin-bottom: 1.2rem;
  }
`;

export const StyledConstructorField = styled(
  StyledBlocksArea
)<StyledConstructorFieldProps>`
  ${({ isEmpty }) => isEmpty && setStyledConstructorField()}
`;

export const StyledConstructorTitle = styled.p`
  margin-bottom: 0.4rem;
  font-family: "Inter Medium", sans-serif;
  font-size: 1.4rem;
  line-height: 1.21;
  color: ${({ theme }) => theme.electric};
`;

export const StyledConstructorText = styled.p`
  font-size: 1.2rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.mediumGray};
`;
