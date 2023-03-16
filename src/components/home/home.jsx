import Image from "next/image";
import Typography from "../base/typography";
export default function Home() {
  return (
    <section>
      <Typography variant={"h2"}>Bürger*innen-Initiative</Typography>
      <Typography variant={"h2"}>Wurzeln im Beton</Typography>
      <Typography variant={"info-head"}>
        Ökologische und soziale Lösungen gemeinsam denken
      </Typography>
      <h3>Über uns</h3>
      <div>
        <h4>Wir und die alte Ziegelei</h4>
        <p>
          Wir sind eine Gruppe von Menschen, die gemeinsam aktiv sind, um ein
          Naherholungsgebiet für die Menschen und einen Lebensraum für viele
          verschiedene Spezies zu erhalten. Wir haben es satt, die
          unwirtschaftlichen, wissenschaftlich rückständigen, unkreativen,
          bequemen Entscheidungen des gewählten Stadtrates Nürtingen und der
          Stadtverwaltung wie Lemminge hinzunehmen.
        </p>
        <p>
          Wir setzen unsere Tatkraft und Zeit, unsere Intelligenz und unser
          Wissen, unsere Kreativität und Phantasie, unsere Solidarität und
          Menschlichkeit ein, um gemeinsam einen besonderen und lebendigen
          Lebensraum zu erhalten.
        </p>
        <p>
          Wir wollen aufzeigen, dass es Alternativen gibt. Wohnraumschaffung
          kann mit langfristiger Wirtschaftlichkeit, Klimaschutz, Naturerhalt
          und sozialen Fragen vereinbart werden.
        </p>
        <Image
          src="/B_rgerinnen-Initiative_Wurzeln_im_Beton.png"
          alt="flyer march 2023"
          width={1410}
          height={2000}
          layout="responsive"
        />
      </div>
      <div>
        <h4>keine ahnung überschrift</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          corporis similique ratione! Ex maxime corrupti magnam numquam quia
          omnis error vitae quo ipsa quaerat natus accusamus excepturi fugiat,
          fugit illo.
        </p>
        <a href="#">hier unter anderem pdf zu konzeptentwurf</a>
      </div>
    </section>
  );
}
