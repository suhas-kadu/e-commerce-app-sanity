import react from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>E-commerce Web App</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
