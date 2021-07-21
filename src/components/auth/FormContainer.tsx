import styled from '@emotion/styled';

export const FormContainer = styled.div`
  align-items: center;
  background-color: var(--indigo-50);
  border-radius: 10px;
  box-shadow: 0 2px 4px -2px var(--gray-200);
  display: flex;
  margin: 0.5rem 0;
  &:focus-within {
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 0 1px var(--indigo-500);
    outline: none;
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-600);
    box-shadow: 0 2px 4px -2px var(--gray-700);
    &:focus-within {
      border: none;
      border-radius: 10px;
      outline: none;
      transition: 0.1s;
    }
  }
`;
