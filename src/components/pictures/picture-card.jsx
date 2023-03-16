import Image from "next/image";

export default function PictureCard({ picture }) {
  return (
    <figure>
      <Image
        src={picture.img}
        alt="informational image"
        layout="responsive"
        width={picture.width}
        height={picture.height}
        max-width="100%"
      />
      <figcaption>{picture.description}</figcaption>
    </figure>
  );
}
