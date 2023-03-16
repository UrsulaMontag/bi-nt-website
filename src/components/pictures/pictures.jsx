import { getPictures } from "@/services/get-pictures";
import PictureCard from "./picture-card";

export default function Pictures() {
  const pictures = getPictures();

  return (
    <section className="imgslider">
      <input type="radio" name="slider" id="slide01" checked="checked" />
      <input type="radio" name="slider" id="slide02" />
      <ul className="sliderElements">
        {pictures.map((picture) => (
          <li key={picture.id} className="sliderImg">
            <PictureCard
              picture={picture}
              className={`sliderImg + ${picture.id}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
