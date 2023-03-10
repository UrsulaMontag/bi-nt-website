import NavWithRouter from "../navbar/navbar";
import LayoutStyled from "./layout.styled";

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <NavWithRouter />
      <main>{children}</main>
    </LayoutStyled>
  );
}
