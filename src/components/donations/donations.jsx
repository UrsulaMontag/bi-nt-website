import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
import Typography from "../base/typography";

export default function Donations() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Spenden</Typography>
      <ContentContainerFlexColumnGap>
        <Typography variant={"body1"}>
          <Typography variant={"span-bold"}>Kontoinhaber: </Typography>elinor
          Treuhand e.V.
        </Typography>
        <Typography variant={"body1"}>
          <Typography variant={"span-bold"}>IBAN: </Typography>
          DE48430609677918887700
        </Typography>
        <Typography variant={"body1"}>
          <Typography variant={"span-bold"}>BIC: </Typography>GENODEM1GLS
        </Typography>
        <Typography variant={"body1"}>
          <Typography variant={"span-bold"}>Verwendungszweck</Typography>
          (bitte immer angeben): ELINORTVGWDT
        </Typography>
        <Typography variant={"body1"}>
          Es können leider keine Spendenquittungen ausgestellt werden.
        </Typography>
      </ContentContainerFlexColumnGap>
    </ContentContainerFlexColumnGap>
  );
}
