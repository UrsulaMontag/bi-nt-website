import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import GlobalStyle from "@/components/base/globalStyle";
import ContainerStyled from "@/components/base/container.styled";

export default function App({ Component, pageProps }) {
  return (
    <ContainerStyled>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ContainerStyled>
  );
}
