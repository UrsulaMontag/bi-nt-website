import Link from "next/link";
import React, { useState } from "react";
import { NavContainer, NavItem, NavList, HamburgerMenu } from "./navbar.styled";
import { withRouter } from "next/router";

const pages = {
  "/": [],
  "/news": [],
  "/events": [],
  "/pictures": [],
  "/background-information": [
    { path: "/officials", label: "Offizielles von Stadt und Presse" },
    { path: "/history", label: "Geschichte" },
    { path: "/team", label: "Team" },
  ],
  "/donations": [],
  "/contact": [],
};

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSubNav, setSubShowNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const toggleSubNav = () => {
    setSubShowNav(!showSubNav);
  };

  const handleLinkClick = (path) => {
    setCurrentPath(path);
    setShowNav(false);
    setSubShowNav(false);
  };

  const generateNavLinks = (currentPath) => {
    return Object.keys(pages).map((path) => {
      const hasSubNav = pages[path].length > 0;

      return (
        <NavItem key={path}>
          <Link
            href={path}
            passHref
            className={currentPath === path ? "active" : ""}
            onClick={() => handleLinkClick(path)}
          >
            {path}
          </Link>
          {hasSubNav && (
            <ul>
              {pages[path].map((subPage) => (
                <NavItem key={subPage.path}>
                  <Link
                    href={path + subPage.path}
                    passHref
                    onClick={() => handleLinkClick(path)}
                  >
                    {subPage.label}
                  </Link>
                </NavItem>
              ))}
            </ul>
          )}
        </NavItem>
      );
    });
  };

  return (
    <NavContainer key="NavContainer">
      <HamburgerMenu
        key="HamburgerMenu"
        showNav={showNav}
        className={showNav ? "active" : ""}
        onClick={toggleNav}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="close-icon"></span>
      </HamburgerMenu>
      <NavList showNav={showNav}>{generateNavLinks(currentPath)}</NavList>
    </NavContainer>
  );
};
const NavWithRouter = withRouter(Nav);
export default NavWithRouter;
