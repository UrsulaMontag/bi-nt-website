import Image from "next/image";
import { StyledPictureCard } from "./picture-card.styled";

export default function PictureCard({ picture }) {
  return (
    <StyledPictureCard className="img-container" picture={picture}>
      <figure className="img-container">
        <Image
          src={picture.img}
          alt="informational image"
          layout="responsive"
          width={picture.width}
          height={picture.height}
        />
        <figcaption>{picture.description}</figcaption>
        <br />
        <figcaption>{picture.copyright ? picture.copyright : null}</figcaption>
      </figure>
    </StyledPictureCard>
  );
}
