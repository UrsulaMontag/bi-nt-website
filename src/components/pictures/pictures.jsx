import PictureCard from "./picture-card";
import { StyledPicturesSlider } from "./pictures.styled";
import { useEffect, useRef, useState } from "react";
import { ContentContainerFlexColumnGap } from "../base/content-containerFlexColumnGap.styled";

export default function Pictures({ pictures }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const handleScroll = () => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        const scrollPosition = slider.scrollLeft;
        const slideWidth = slider.offsetWidth;
        const index = Math.round(scrollPosition / slideWidth);
        setSelectedIndex(index);
      };

      slider.addEventListener("scroll", handleScroll);
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pictures, selectedIndex]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Wrap code that references `window` in a useEffect hook with an empty dependency array
    // to ensure that it only runs on the client-side after the initial render
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleDotClick = (index) => {
    setSelectedIndex(index);
    sliderRef.current.scroll({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <ContentContainerFlexColumnGap>
      <StyledPicturesSlider className="pictures">
        <div className="slider-dots">
          {pictures.map((picture, index) => (
            <div
              key={picture.id}
              className={`dot ${index === selectedIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              <span className="dot-number">
                {index === selectedIndex ? index + 1 : ""}
              </span>
            </div>
          ))}
        </div>
        <div className="picture-slider" ref={sliderRef}>
          {pictures.map((picture, index) => (
            <div
              key={picture.id}
              className={`slider-slide ${
                index === selectedIndex ? "slider-slide--active" : ""
              }`}
            >
              <PictureCard picture={picture} className="slider-picture" />
            </div>
          ))}
        </div>

        {viewportWidth >= 768 && (
          <div className="picture-gallery">
            {pictures.map((picture) => (
              <div key={picture.id} className="gallery-item">
                <PictureCard className="gallery-picture" picture={picture} />
              </div>
            ))}
          </div>
        )}
      </StyledPicturesSlider>
    </ContentContainerFlexColumnGap>
  );
}
