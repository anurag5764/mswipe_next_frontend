import "../public/css/global.css";
import "../public/css/animate.css";
import "../public/css/font-awesome.min.css";
import "../public/css/style.css";
// import WOW from 'wowjs';
import { wrapper } from "../redux/store";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    <Component {...pageProps} />
    // </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
