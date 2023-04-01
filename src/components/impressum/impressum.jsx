import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
import { StyledLink } from "../base/link.styled";
import Typography from "../base/typography";

export default function Impressum() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Kontakt</Typography>
      <ContentContainerFlexColumnGap>
        <Typography variant={"body1"}>Tobias Metzger</Typography>
        <Typography variant={"body1"}>Rellinghauser Str. 6</Typography>
        <Typography variant={"body1"}>45128 Essen</Typography>
        <StyledLink href="/#">https://alte-ziegelei-nt.de</StyledLink>
      </ContentContainerFlexColumnGap>
    </ContentContainerFlexColumnGap>
  );
}
