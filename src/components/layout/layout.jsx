import Header from "../header/header";
import LayoutStyled from "./layout.styled";

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Header />
      <main>{children}</main>
    </LayoutStyled>
  );
}
