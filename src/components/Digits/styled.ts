import styled from "styled-components";
import { StyledBlockWrapper } from "../commonStyledComps";

export const StyledDigitsWrapper = styled(StyledBlockWrapper)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "d7 d8 d9"
    "d4 d5 d6"
    "d1 d2 d3"
    "d0 d0 comma";
  gap: 0.8rem;
  height: 22.4rem;
`;
