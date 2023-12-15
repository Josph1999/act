import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "src/contexts/auth-context";
import { useNProgress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/global.css";
import localFont from "next/font/local";
import { LanguageProvider } from "src/contexts/language-context";
import "fontsource-firago";

const notoSans = Noto_Sans_Georgian({
  subsets: ["georgian", "latin", "latin-ext"],
});
// const notoSans = localFont({ src: '../../public/fonts/bpg_nino_mtavruli_bold.ttf' })
const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>DBEF</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:url" content="https://www.dbef.ge" />
        <meta
          property="og:image"
          content="https://www.dbef.ge/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterKa.77e41d8e.png&w=128&q=75"
        />
      </Head>
      <style jsx global>{`
        body {
          font-family: FiraGo !important;
        }
      `}</style>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <AuthConsumer>
                {(auth) =>
                  !auth.isInitialized ? (
                    <SplashScreen />
                  ) : (
                    getLayout(
                      <DndProvider backend={HTML5Backend}>
                        <Component {...pageProps} />
                      </DndProvider>
                    )
                  )
                }
              </AuthConsumer>
            </ThemeProvider>
          </LanguageProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
