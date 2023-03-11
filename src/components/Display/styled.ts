import styled from "styled-components";

export const StyledDisplay = styled.div`
  padding: 0.4rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.whitishGray};
  color: ${({ theme }) => theme.graishBlack};
  font-size: 3.6rem;
  line-height: 1.22;
  font-weight: 800;
  text-align: right;
`;
