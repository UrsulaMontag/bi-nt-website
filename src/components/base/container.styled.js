const { default: styled } = require("styled-components");

const ContainerStyled = styled.section`
  background: var(--main-bg-color);
  background-image: url("/kauz_mauer_riss_transparent_klein.png");
  background-size: cover;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 1050px;
    background-image: url("/kauz_mauer_riss_transparent.png");
  }
`;
export default ContainerStyled;
