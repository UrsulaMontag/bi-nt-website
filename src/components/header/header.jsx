import NavWithRouter from "../navbar/navbar";
import Typography from "../base/typography";
import { StyledHeader, StyledHeaderInBox } from "./header.styled";
import { StyledLink } from "../base/link.styled";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderInBox>
        <StyledLink href="/" passHref>
          <Typography variant={"h2-link"}>
            Bürger*innen-Initiative
            <br />
            Wurzeln im Beton
          </Typography>
        </StyledLink>
        <Typography variant={"info-head"}>
          Ökologische und soziale Lösungen gemeinsam denken
        </Typography>
      </StyledHeaderInBox>
      <NavWithRouter />
    </StyledHeader>
  );
}
