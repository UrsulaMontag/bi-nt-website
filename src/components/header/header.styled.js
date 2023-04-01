import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: sticky;
  top: 0;
  right: 0;
  opacity: 1;
  background-color: var(--color-light__header);
  z-index: 100;
  padding: 0 0.5rem;
`;
export const StyledHeaderInBox = styled.div`
  overflow: hidden;
`;
