import styled from "styled-components";

export const StyledPicturesSlider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  .picture-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: normal;
    scrollbar-color: var(--accent-color-green);
    scrollbar-gutter: stable;
    scroll-behavior: smooth;
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
    border: 2px solid var(--accent-color-green);
    padding: 0.3rem; /* add a border or other style to the active slide */
  }

  .slider-picture {
    width: 100%;
  }

  .slider-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .dot {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 0.25rem 0.5rem;
    padding: 1rem;
    cursor: pointer;
    background-color: var(--accent-color-grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot.active {
    background-color: var(--accent-color-green);
    color: #fff;
  }

  .dot-number {
    font-size: 1.4rem;
    font-weight: 400;
    color: inherit;
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
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      max-width: 100vw;
      width: 100%;
    }

    .gallery-item {
      width: 100%;
    }

    .gallery-picture {
      width: 100%;
    }
  }
`;
