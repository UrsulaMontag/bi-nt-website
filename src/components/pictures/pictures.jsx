import PictureCard from "./picture-card";
import { StyledPicturesSlider, StyledPicturesGallery } from "./pictures.styled";
import { useState } from "react";
import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";

export default function Pictures({ pictures }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleInputChange = (index) => {
    console.log("selectedIndex", selectedIndex);
    setSelectedIndex(index);
    console.log("new index", index);
  };

  return (
    <ContentContainerFlexColumnGap>
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
                  onChange={() => {
                    handleInputChange(index);
                    console.log("index", index);
                  }}
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
    </ContentContainerFlexColumnGap>
  );
}
