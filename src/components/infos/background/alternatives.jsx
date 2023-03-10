import Typography from "@/components/base/typography";
import ContainerCenteredFlexColumn from "@/components/base/container-centered-flex-column.styled";

export default function Alternatives() {
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
