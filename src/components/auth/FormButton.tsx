import styled from '@emotion/styled';

export const FormButton = styled.button`
  background-color: var(--indigo-500);
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  border-radius: 100px;
  margin: 1rem auto;
  padding: 1rem 2rem;
  text-transform: uppercase;
  &:hover {
    background-color: var(--indigo-600);
  }
  &:active {
    background-color: var(--indigo-800);
  }
`;
