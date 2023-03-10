import Nav from "../navbar/navbar";
import LayoutStyled from "./layout.styled";

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Nav />
      <main>{children}</main>
    </LayoutStyled>
  );
}
