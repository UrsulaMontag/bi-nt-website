import styled from "styled-components";

export const StyledPicturesSlider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  .picture-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
  }

  .slider-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  }

  .slider-slide--active {
    border: 2px solid #000; /* add a border or other style to the active slide */
  }

  .slider-picture {
    width: 100%;
  }

  .picture-gallery {
    display: none; /* hide the gallery by default */
  }

  @media (min-width: 768px) {
    .picture-slider {
      display: none; /* hide the slider on desktop */
    }

    .picture-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }

    .gallery-item {
      width: 100%;
    }

    .gallery-picture {
      width: 100%;
    }
  }
`;
