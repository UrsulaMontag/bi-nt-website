import Image from "next/image";

export default function PictureCard({ picture }) {
  const imagePath = `/Bilder/${picture.img}`;
  return (
    <figure>
      <Image
        src={imagePath}
        alt="informational image"
        layout="responsive"
        width={picture.width}
        height={picture.height}
      />
      <figcaption>{picture.description}</figcaption>
    </figure>
  );
}
