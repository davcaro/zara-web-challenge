import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: var(--spacing-8);
  text-decoration: none;
  color: var(--colors-white);
`;
