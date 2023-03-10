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
          <Link href="/" onClick={toggleNav}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about-us" onClick={toggleNav}>
            Über uns
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact" onClick={toggleNav}>
            Kontakt
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/events" onClick={toggleNav}>
            Events
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/news" onClick={toggleNav}>
            Aktuelles
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/pictures" onClick={toggleNav}>
            Bilder
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/videos" onClick={toggleNav}>
            Videos
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
