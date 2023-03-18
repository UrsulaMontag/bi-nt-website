import { ContentContainerFlexColumnGap } from "@/components/base/content-containerFlexColumnGap.styled";
import Typography from "@/components/base/typography";
import Pictures from "@/components/pictures/pictures";
import { getHistoricPics } from "@/services/get-historical-pics";

export default function History() {
  const pictures = getHistoricPics();
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>
        Historisches über die Alte Ziegelei
      </Typography>
      <section>
        <Typography variant={"h3"}>
          Historische Bilder-Sammlung vom Gelände
        </Typography>
        <Pictures pictures={pictures} />
      </section>
    </ContentContainerFlexColumnGap>
  );
}
