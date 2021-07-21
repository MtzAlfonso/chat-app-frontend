import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  font-weight: 900;
  color: var(--indigo-500);
  text-decoration: none;
  margin-left: 0.3rem;

  &:hover {
    color: var(--indigo-600);
    text-decoration: underline;
  }
`;
