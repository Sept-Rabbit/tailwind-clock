import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="h-screen mx-auto font-bold text-white bg-gray-900 rounded-lg sm:w-full lg:w-96">
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
