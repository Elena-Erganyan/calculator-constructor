import styled from "styled-components";
import { StyledBlockWrapper, StyledButton } from "../commonStyledComps";

export const StyledEqualButtonWrapper = styled(StyledBlockWrapper)`
  height: 7.2rem;
`;

export const StyledEqualButton = styled(StyledButton)`
  height: 6.4rem;
  background-color: ${({ theme }) => theme.electric};
  color: ${({ theme }) => theme.white};
  border: none;
`;
