import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  padding: 3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 5.6rem;
    padding: 5rem;
  }
`;
