import styled from "styled-components";

export const StyledDisplay = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.whitishGray};
  color: ${({ theme }) => theme.graishBlack};
  font-family: "Inter Extra Bold", sans-serif;
  font-size: 3.6rem;
  line-height: 1.22;
  text-align: right;
`;
