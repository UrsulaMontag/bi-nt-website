import styled from "styled-components";
import Link from "next/link";
export const StyledLink = styled(Link)`
  color: var(--accent-color-green) !important;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: var(--accent-color-darker);
    font-weight: 550;
  }
`;
