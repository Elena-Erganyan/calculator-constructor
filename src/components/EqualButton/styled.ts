import styled from "styled-components";
import { StyledButton } from "../commonStyledComps";

export const StyledEqualButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.electric};
  color: ${({ theme }) => theme.white};
  border: none;
`;
