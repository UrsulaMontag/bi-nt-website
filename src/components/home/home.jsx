import Image from "next/image";
import Typography from "../base/typography";
import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
export default function Home() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Über Uns</Typography>
      <article>
        <Typography variant={"h3"}>Wir und die Alte Ziegelei</Typography>

        <Typography variant={"body1"}>
          Wir sind eine Gruppe von Menschen, die gemeinsam aktiv sind, um ein
          Naherholungsgebiet für die Menschen und einen Lebensraum für viele
          verschiedene Spezies zu erhalten. Wir haben es satt, die
          unwirtschaftlichen, wissenschaftlich rückständigen, unkreativen,
          bequemen Entscheidungen des gewählten Stadtrates Nürtingen und der
          Stadtverwaltung wie Lemminge hinzunehmen.
        </Typography>
        <Typography variant={"body1"}>
          Wir setzen unsere Tatkraft und Zeit, unsere Intelligenz und unser
          Wissen, unsere Kreativität und Phantasie, unsere Solidarität und
          Menschlichkeit ein, um gemeinsam einen besonderen und lebendigen
          Lebensraum zu erhalten.
        </Typography>
        <Typography variant={"body1"}>
          Wir wollen aufzeigen, dass es Alternativen gibt. Wohnraumschaffung
          kann mit langfristiger Wirtschaftlichkeit, Klimaschutz, Naturerhalt
          und sozialen Fragen vereinbart werden.
        </Typography>
      </article>
      <article>
        <Typography variant={"h3"}>Unser aktueller Flyer 03/2023</Typography>
        <Image
          src="/B_rgerinnen-Initiative_Wurzeln_im_Beton.png"
          alt="flyer march 2023"
          width={1410}
          height={2000}
          layout="responsive"
        />
        <Image
          src="/AUFDEM_2.PNG.png"
          alt="flyer march 2023"
          width={1410}
          height={2000}
          layout="responsive"
        />
      </article>
    </ContentContainerFlexColumnGap>
  );
}
