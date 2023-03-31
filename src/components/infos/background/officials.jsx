import { ContentContainerFlexColumnGap } from "../../base/content-containerFlexColumnGap.styled";
import Typography from "../../base/typography";
import { StyledLink } from "@/components/base/link.styled";

export default function Officials() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Offizielles von Stadt und Presse</Typography>
      <ContentContainerFlexColumnGap>
        <Typography variant={"body1"}>
          Hier findet ihr alle &shy;
          <StyledLink
            href="https://www.nuertingen.de//de/nuertingen-fuer-alle/rathaus-buergerservice/staedtische-aemter-einrichtungen/stadtplanungsamt/bebauungsplaene/laufende-verfahren/alte-ziegelei"
            aria-label="link to webpage nuertingen"
          >
            Informationen zur Sache
          </StyledLink>
          , die von Seiten der Stadt zur Verfügung gestellt werden.
        </Typography>
      </ContentContainerFlexColumnGap>
    </ContentContainerFlexColumnGap>
  );
}
