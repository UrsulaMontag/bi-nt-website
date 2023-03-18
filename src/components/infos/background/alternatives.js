import { ContentContainerFlexColumnGap } from "@/components/base/content-containerFlexColumnGap.styled";
import Typography from "@/components/base/typography";
import PictureCard from "@/components/pictures/picture-card";
import Pictures from "@/components/pictures/pictures";
import { getPdfAlternatePics } from "@/services/get-pdf-alternate-pics";

export default function Alternatives() {
  const pictures = getPdfAlternatePics();
  const picturesConcept = pictures.filter((pic) => pic.id > 0 && pic.id < 6);
  const picturesChildFarm = pictures.filter(
    (pic) => pic.id === 6 || pic.id === 7
  );
  const picturesNewLiving = pictures.filter((pic) => pic.id > 7 && pic.id < 10);
  const picturesGoodExample = pictures.filter(
    (pic) => pic.id > 10 && pic.id < 18
  );
  const pictureCrossSection = pictures.find((pic) => pic.id === 10);

  return (
    <ContentContainerFlexColumnGap>
      <Typography variant={"h1"}>Unsere Alternativen</Typography>
      <Typography variant={"h2"}>
        Konzeptentwurf Alte Ziegelei und Zementwerk Nürtingen
      </Typography>
      <div>
        <Typography variant={"h3"}>
          Gegenüberstellung Alte Ziegelei vs. Zementwerk
        </Typography>
        <Pictures pictures={picturesConcept} />
      </div>
      <section>
        <div>
          <Typography variant={"h3"}>Zementwerk</Typography>
          <ul>
            <li>
              <Typography variant={"info"}>
                Bereits großflächig versiegelt
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Ineffiziente Platznutzung durch großflächige Parkräume und
                Bungalow-Bauten Lidl, Dialysezentrum und Autohaus
              </Typography>
              <ul>
                <li>
                  <Typography variant={"info"}>
                    Trägt zur Überhitzung der Stadt bei
                  </Typography>
                </li>
                <li>
                  <Typography variant={"info"}>
                    Trägt zur Begünstigung von Hochwasser bei Starkregen bei
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography variant={"info"}>
                Wenig attraktives Eingangstor nach Nürtingen aus Richtung
                Reutlingen, Metzingen
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Direkte Anbindung zum Neckarufer und Innenstadt
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Direkte Anbindung an Grünflächen südlich der Bahnlinie schaffbar
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Direkte Anbindung an öffentlichen Nahverkehr (Bus)
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Unmittelbare Nähe zu Einkaufs- und Gesundheitseinrichtungen
                (Lidl, Dialyse, Fitness)
              </Typography>
            </li>
          </ul>
        </div>

        <div>
          <Typography variant={"h3"}>Alte Ziegelei</Typography>
          <ul>
            <li>
              <Typography variant={"info"}>
                Bebauung zerstört wertvolle Frischluftschneise und
                Regenrückhaltung
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Bebauung zerstört gerne von Jung und Alt genutztes
                Naherholungsgebiet
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Gelände hat schlecht erreichbare Anbindung an öffentlichen
                Nahverkehr, die aufgrund der Lage auch nicht geschaffen werden
                kann
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Gelände hat schlechte Anbindung an Innenstadt,
                Einkaufsmöglichkeiten, Neckar etc. (nur mit Auto oder auf
                Umwegen zu erreichen, da Unterführung nach Kleintischardt mit
                Treppenab-/-aufgängen)
              </Typography>
            </li>
            <li>
              <Typography variant={"info"}>
                Gelände bietet bei behutsamer Planung großes Potential für
                Kinder- und Jugendfarm
              </Typography>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Typography variant={"h3"}>
          Konzeptvorschlag Alte Ziegelei | Kinder- und Jugendfarm
        </Typography>
        <Pictures pictures={picturesChildFarm} />
      </section>
      <section>
        <Typography variant={"h3"}>
          Konzeptvorschlag Neugestaltung Altes Zementwerk
        </Typography>
        <Pictures pictures={picturesNewLiving} />
      </section>
      <section>
        <PictureCard picture={pictureCrossSection} />
      </section>
      <section>
        <Typography variant={"h3"}>
          International beachtete Beispiele aus aller Welt
        </Typography>
        <Pictures pictures={picturesGoodExample} />
      </section>
    </ContentContainerFlexColumnGap>
  );
}
