import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

export const NavList = styled.ul`
  display: ${(props) => (props.showNav || props.showSubNav ? "flex" : "none")};
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding-top: 3rem;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
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
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: ${({ showSubNav }) =>
    showSubNav ? "translateX(0)" : "translateX(-100%)"};
  z-index: 2;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  padding: 1rem;
  .link {
    text-decoration: none;
  }
`;
export const HamburgerMenu = styled.div`
  align-self: flex-end;
  cursor: pointer;
  color: black;
  margin: 2rem;

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
    z-index: 10;
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
    }
  }
`;
NavContainer.displayName = "NavContainer";
HamburgerMenu.displayName = "HamburgerMenu";
