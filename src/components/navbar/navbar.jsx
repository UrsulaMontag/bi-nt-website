import Link from "next/link";
import React, { useState } from "react";
import { NavContainer, NavItem, NavList, HamburgerMenu } from "./navbar.styled";
import { withRouter } from "next/router";

const pages = {
  "/": { path: [], label: "Über Uns" },
  "/news": { path: [], label: "Aktuelles" },
  "/events": { path: [], label: "Veranstaltungen" },
  "/pictures": { path: [], label: "Bilder" },
  "/background-information": {
    path: [
      { path: "/officials", label: "Offizielles von Stadt und Presse" },
      { path: "/in-demand", label: "Nachgefragt" },
      { path: "/alternatives", label: "Unsere Alternativ-Vorschläge" },
      { path: "/flora-fauna", label: "Flora und Fauna" },
      { path: "/history", label: "Geschichte" },
    ],
    label: "Bilder",
  },
  "/donations": { path: [], label: "Spenden" },
  "/contact": { path: [], label: "Kontakt" },
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
    toggleSubNav();
    toggleNav();
  };

  const generateNavLinks = (currentPath) => {
    return (
      pages &&
      Object.keys(pages)?.map((path) => {
        const page = pages[path];
        const hasSubNav = page?.path && page?.path.length > 0;

        return (
          <NavItem key={path}>
            <Link
              href={path}
              passHref
              className={currentPath === path ? "active" : ""}
              onClick={() => handleLinkClick(path)}
            >
              {page?.label || path}
            </Link>
            {hasSubNav && (
              <ul>
                {page.path.map((subPage) => (
                  <NavItem key={subPage.path}>
                    <Link
                      href={path + subPage.path}
                      passHref
                      onClick={() => handleLinkClick(path + subPage.path)}
                      className={
                        currentPath === path + subPage.path ? "active" : ""
                      }
                    >
                      {subPage.label}
                    </Link>
                  </NavItem>
                ))}
              </ul>
            )}
          </NavItem>
        );
      })
    );
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
