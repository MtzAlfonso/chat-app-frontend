import styled from '@emotion/styled';

export const Card = styled.div`
  justify-content: space-between;
  background-color: var(--indigo-100);
  border-radius: 10px;
  box-shadow: 0 5px 15px -2px var(--gray-400);
  display: flex;
  flex-direction: column;
  height: max(80%, 32rem);
  padding: 2rem;
  text-align: center;
  width: min(90%, 30rem);
  @media (prefers-color-scheme: dark) {
    background: var(--gray-900);
  }
`;
