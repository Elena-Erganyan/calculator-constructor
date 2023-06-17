import styled from "styled-components";

export const StyledSwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: fit-content;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.lightGray};
`;
