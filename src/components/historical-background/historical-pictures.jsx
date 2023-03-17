import { getPictures } from "@/services/get-pictures";
import PictureCard from "./picture-card";
import { StyledPicturesSlider, StyledPicturesGallery } from "./pictures.styled";
import { useState } from "react";
import Typography from "../base/typography";

export default function Pictures() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pictures = getPictures();

  const handleInputChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Typography variant={"h3"}>
        Bilder-Sammlung historischer Aufnahmen
      </Typography>
      <StyledPicturesSlider selectedIndex={selectedIndex}>
        {/**slider for mobile devices */}
        <div className="slider">
          <div className="slider-controls">
            {pictures.map((_, index) => (
              <label
                key={index}
                htmlFor={`slide-${index}`}
                className={`slider-control ${
                  index === selectedIndex ? "slider-control--active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="slider"
                  id={`slide-${index}`}
                  checked={selectedIndex === index}
                  onChange={() => handleInputChange(index)}
                />
              </label>
            ))}
          </div>
          <div className="slider-wrapper">
            {pictures.map((picture, index) => (
              <div
                key={picture.id}
                className={`slider-slide ${
                  index === selectedIndex ? "slider-slide--active" : ""
                }`}
              >
                <PictureCard picture={picture} />
              </div>
            ))}
          </div>
        </div>
      </StyledPicturesSlider>

      {/**gallery for larger devices */}
      <StyledPicturesGallery className="gallery">
        {pictures.map((picture) => [
          <div key={picture.id} className="gallery-item">
            <PictureCard className="gallery-image" picture={picture} />
          </div>,
        ])}
      </StyledPicturesGallery>
    </>
  );
}
