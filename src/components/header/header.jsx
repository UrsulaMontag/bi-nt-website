import NavWithRouter from "../navbar/navbar";
import Typography from "../base/typography";
import { StyledHeader } from "./header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Typography variant={"h2"}>Bürger*innen-Initiative</Typography>
        <Typography variant={"h2"}>Wurzeln im Beton</Typography>
        <Typography variant={"info-head"}>
          Ökologische und soziale Lösungen gemeinsam denken
        </Typography>
      </div>
      <NavWithRouter />
    </StyledHeader>
  );
}
