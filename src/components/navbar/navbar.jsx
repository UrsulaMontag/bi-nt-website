import Link from "next/link";
import React, { useState } from "react";
import {
  NavContainer,
  NavItem,
  NavList,
  HamburgerMenu,
  NavSubList,
} from "./navbar.styled";
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
    label: "Hintergrund Informationen",
  },
  "/donations": { path: [], label: "Spenden" },
  "/contact": { path: [], label: "Kontakt" },
};
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSubNav, setSubShowNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [activeParentNavItem, setActiveParentNavItem] = useState(null);
  const [activeSubNavItem, setActiveSubNavItem] = useState(null);

  const toggleNav = () => {
    setShowNav(!showNav);
    setSubShowNav(false);
    setActiveParentNavItem(null);
    setActiveSubNavItem(null);
  };
  const toggleSubNav = (path) => {
    setActiveParentNavItem(path);
    setSubShowNav(!showSubNav);
    setActiveSubNavItem(null);
  };

  const handleLinkClick = (path) => {
    setCurrentPath(path);
    const page = pages[path];
    const hasSubNav = page?.path && page?.path.length > 0;
    if (hasSubNav) {
      toggleSubNav();
    } else {
      toggleNav();
    }
  };
  const handleSubNavClick = (path) => {
    setActiveSubNavItem(path);
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
            <div
              onClick={() => {
                toggleSubNav(path);
              }}
            >
              <Link
                href={path}
                className={`${currentPath === path ? "active" : ""}, link`}
                onClick={() => {
                  handleLinkClick(path);
                }}
              >
                {page?.label || path}
              </Link>
            </div>
            {hasSubNav && (
              <NavSubList
                showSubNav={activeParentNavItem === path ? showSubNav : false}
              >
                {page.path.map((subPage) => (
                  <NavItem key={subPage.path} id={subPage.path}>
                    <Link
                      href={path + subPage.path}
                      passHref
                      onClick={() => handleSubNavClick(path + subPage.path)}
                      className={`${
                        currentPath === path + subPage.path ? "active" : ""
                      }, link`}
                    >
                      {subPage.label}
                    </Link>
                  </NavItem>
                ))}
              </NavSubList>
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
