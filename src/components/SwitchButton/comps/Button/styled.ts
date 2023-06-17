import styled from "styled-components";

export const StyledSwitchInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.lightGray};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.white};
  }
`;

export const StyledSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.darkGray};
    font-family: "Inter Medium", sans-serif;
    font-size: 1.4rem;
    line-height: 1.07;
    text-transform: capitalize;
  }
`;
