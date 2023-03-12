import styled from "styled-components";
import { StyledButton } from "../commonStyledComps";

export const StyledEqualButton = styled(StyledButton)`
  height: 6.4rem;
  background-color: ${({ theme }) => theme.electric};
  color: ${({ theme }) => theme.white};
  border: none;
`;
