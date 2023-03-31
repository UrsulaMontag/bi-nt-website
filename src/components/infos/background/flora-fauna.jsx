import { StyledPdfContainer } from "@/components/base/embed-pdf.styled";
import { ContentContainerFlexColumnGap } from "../../base/content-containerFlexColumnGap.styled";
import Typography from "../../base/typography";
import { StyledLink } from "@/components/base/link.styled";

export default function FloraFauna() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>
        Flora und Fauna auf dem Gelände der Alten Ziegelei
      </Typography>
      <ContentContainerFlexColumnGap>
        <Typography variant={"h3"}>Stellungnahme des NaBu Nürtingen</Typography>
        <StyledPdfContainer src="/pdf/StellungnahmeNabu.pdf" />
        <div></div>
        <Typography variant={"h3"}>
          Stellungnahme der Höheren Forstbehörde
        </Typography>
        <StyledPdfContainer src="/pdf/StellungnahmeForstamtEsslingen.pdf" />
      </ContentContainerFlexColumnGap>
    </ContentContainerFlexColumnGap>
  );
}
