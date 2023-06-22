import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"2FA"}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </>
  );
};

export default Layout;
