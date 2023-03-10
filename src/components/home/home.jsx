import ContainerCenteredFlexColumn from "../base/container-centered-flex-column.styled";
import Typography from "../base/typography";
export default function Home() {
  return (
    <ContainerCenteredFlexColumn>
      <Typography variant={"h2"}>Bürger*innen-Initiative</Typography>
      <Typography variant={"h2"}>Wurzeln im Beton</Typography>
      <Typography variant={"info-head"}>
        Ökologische und soziale Lösungen gemeinsam denken
      </Typography>
    </ContainerCenteredFlexColumn>
  );
}
