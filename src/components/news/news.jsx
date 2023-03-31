import Image from "next/image";
import Typography from "../base/typography";
import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
export default function News() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Aktuelle Informationen</Typography>
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
      <article>
        <Typography variant={"h3"}>Auch ein Feminismus</Typography>
        <Typography variant={"info"}>
          -- Ein Gedicht über den aktuellen Zustand der Welt --
        </Typography>
      </article>
    </ContentContainerFlexColumnGap>
  );
}
