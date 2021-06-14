import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@600;800&family=Teko:wght@700&display=swap');

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Mulish';
  }

  strong {
    font-family: 'Mulish';
    font-weight: 800;
  }
`

const theme = {}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}