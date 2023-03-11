import styled from "styled-components";

export const StyledConstructorField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.6rem;
  border-radius: 0.6rem;
  border: 2px dashed ${({ theme }) => theme.gray};
  height: 44.8rem;
  text-align: center;

  img {
    margin-bottom: 1.2rem;
  }
`;

export const StyledConstructorTitle = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.21;
  font-weight: 500;
  color: ${({ theme }) => theme.electric};
`;

export const StyledConstructorText = styled.p`
  font-size: 1.2rem;
  line-height: 1.25;
  font-weight: 400;
  color: ${({ theme }) => theme.mediumGray};
`;
