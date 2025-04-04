import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children, title = "MSwipe", description = "MSwipe" }) => {
  const router = useRouter();

  // Check the current route
  const isHomePage = router.pathname === '/';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      {/* <div className="container">
        <div className="pageWrap"> */}
        <Header />
          {/* <ToastContainer position="bottom-right" /> */}
          {children}
          <Footer />
        {/* </div>
      </div> */}
    </div>
  );
};

export default Layout;
