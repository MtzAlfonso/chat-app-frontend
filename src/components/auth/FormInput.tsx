import styled from '@emotion/styled';

export const FormInput = styled.input`
  background-color: var(--indigo-50);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  width: 100%;
  outline: none;
  padding: 1rem 0;
  &::placeholder {
    color: var(--gray-400);
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-600);
    caret-color: var(--gray-100);
    color: var(--gray-50);
  }
`;
