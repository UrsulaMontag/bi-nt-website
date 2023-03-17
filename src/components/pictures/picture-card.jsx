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
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <figcaption>{picture.description}</figcaption>
      </figure>
    </StyledPictureCard>
  );
}
