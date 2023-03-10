const { default: styled } = require("styled-components");

const ContainerStyled = styled.section`
  background: var(--main-bg-color);
  background-image: url("/kauz_mauer_riss_transparent_klein.png");
  background-size: cover;

  @media (min-width: 768px) {
    max-width: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("/kauz_mauer_riss_transparent.png");
  }
`;
export default ContainerStyled;
