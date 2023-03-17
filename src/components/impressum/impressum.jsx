import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";
import Typography from "../base/typography";

export default function Impressum() {
  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h3"}>Kontakt</Typography>
      <div>
        <p>Tobias Metzger</p>
        <p>Rellinghauser Str. 6</p>
        <p>45128 Essen</p>
        <a href="#">hier unter anderem pdf zu konzeptentwurf</a>
      </div>
      <div>
        <h4>keine ahnung überschrift</h4>
        <p>
          Wir freuen uns, wenn Sie Interesse haben, mit uns in Kontakt zu
          treten. Sie können uns unter dieser Telefonnummer oder per Mail
          erreichen:
        </p>
      </div>
    </ContentContainerFlexColumnGap>
  );
}
