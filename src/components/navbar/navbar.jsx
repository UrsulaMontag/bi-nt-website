import Link from "next/link";
import React, { useState } from "react";
import { NavContainer, NavItem, NavList, HamburgerMenu } from "./navbar.styled";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <NavContainer>
      <HamburgerMenu
        showNav={showNav}
        className={showNav ? "active" : ""}
        onClick={toggleNav}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="close-icon"></span>
      </HamburgerMenu>
      <NavList showNav={showNav}>
        <NavItem>
          <Link href="/">index</Link>
        </NavItem>
        <NavItem>
          <Link href="/about-us">Über uns</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Kontakt</Link>
        </NavItem>
        <NavItem>
          <Link href="/events">Events</Link>
        </NavItem>
        <NavItem>
          <Link href="/news">Aktuelles</Link>
        </NavItem>
        <NavItem>
          <Link href="/pictures">Bilder</Link>
        </NavItem>
        <NavItem>
          <Link href="/videos">Videos</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
