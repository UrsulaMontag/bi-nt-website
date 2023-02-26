import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">index</Link>
        </li>
        <li>
          <Link href="/about-us">Über uns</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/news">Aktuelles</Link>
        </li>
        <li>
          <Link href="/pictures">Bilder</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
