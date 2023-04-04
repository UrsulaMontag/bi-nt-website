import Image from "next/image";
import Typography from "../base/typography";
import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
export default function Events() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Veranstaltungen</Typography>
      <article>
        <Typography variant={"h3"}>Regelmäßige Treffen</Typography>
        <Typography variant={"body1"}>
          <span>Zweiwöchentlich </span>Montags ab dem <span>3.4.2023</span>
          &shy; in der Silberburg, Wilhelmstr.1, 72622 Nürtingen
        </Typography>
      </article>
      {/* <article>
        <Typography variant={"h3"}>Gemütliches Info-Treff</Typography>
        <Typography variant={"body1"}>
          <span>09.04.2023 </span>Nachmittags <span>Uhrzeit folgt </span>
        </Typography>
        <Typography variant={"body1"}>
          Ein gemütliches Treffen auf dem Gelände der Alten Ziegelei mit
          Informationen über die Örtlichkeiten und das geplante Bauvorhaben,
          Kaffee und Kuchen (wer kann bringt etwas mit) und nachbarschaftlichen
          Gesprächen
        </Typography>
      </article> */}
    </ContentContainerFlexColumnGap>
  );
}
