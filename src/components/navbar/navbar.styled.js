import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavList = styled.ul`
  z-index: 2;

  display: ${(props) => (props.showNav || props.showSubNav ? "flex" : "none")};
  flex-direction: column;
  list-style-type: none;
  margin: 0 1.5rem 0 0.5rem;
  padding-top: 3rem;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-light);
  transition: transform 0.3s ease-in-out;
  transform: ${({ showNav }) =>
    showNav ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavSubList = styled.ul`
  display: ${(props) => (props.showSubNav ? "flex" : "none")};
  flex-direction: column;
  list-style-type: none;
  margin-left: 3rem;
  padding-top: 2rem;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({ showSubNav }) =>
    showSubNav ? "translateX(0)" : "translateX(-100%)"};
  z-index: 2;
`;

export const NavItem = styled.li`
  padding: 1rem;
  .link {
    text-decoration: none;
  }
`;
export const HamburgerMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 300;
  cursor: pointer;
  color: black;
  margin: 4px 2px 0 0;
  > .hamburger-bar {
    display: block;
    height: 2px;
    width: 28px;
    background-color: black;
    border-radius: 9px;
    transition: all 0.4s ease-in-out;
  }
  > .hamburger-bar:not(:last-child) {
    margin-bottom: 7px;
  }
  > .close-icon {
    display: none;
  }

  /* Hamburger menu animation */
  &.active {
    transition-delay: 0.8s;
    transform: rotate(45deg);
    color: black;

    > .hamburger-bar:nth-child(2) {
      width: 0;
    }
    > .hamburger-bar:nth-child(1),
    > .hamburger-bar:nth-child(3) {
      transition-delay: 0.4s;
      background-color: black;
    }
    > .hamburger-bar:nth-child(1) {
      transform: translateY(9px);
    }

    > .hamburger-bar:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
    > .close-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 28px;
      height: 28px;
      background-color: transparent;
      border: none;
      outline: none;
      z-index: 300;
    }
  }
`;
NavContainer.displayName = "NavContainer";
HamburgerMenu.displayName = "HamburgerMenu";
