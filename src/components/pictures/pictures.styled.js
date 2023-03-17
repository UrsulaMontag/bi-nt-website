import styled from "styled-components";

export const StyledPicturesSlider = styled.section`
  .slider {
    z-index: 1;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: auto;
  }

  .slider-wrapper {
    display: flex;
    width: 100vw;
    z-index: -100;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${(props) => -props.selectedIndex * 100}%);
  }

  .slider-slide {
    flex: 1 0 100%;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
  }

  .slider-slide--active {
    margin-right: 0;
  }

  .slider-controls {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .slider-control {
    margin: 5px 5px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #aaa;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .slider-control:hover {
    background-color: #888;
  }
  .slider-control--active {
    background-color: #68b022;
    border-color: #68b022;
  }

  .slider-control input[type="radio"] {
    display: none;
  }

  @media screen and (min-width: 790px) {
    .slider {
      display: none;
    }
  }
`;

export const StyledPicturesGallery = styled.section`
  @media screen and (max-width: 790px) {
    display: none;
  }

  @media screen and (min-width: 790px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .gallery-item {
      position: relative;
      overflow: hidden;
      flex-basis: calc(33.33% - 10px);
      margin-bottom: 1rem;
      
  }
`;
