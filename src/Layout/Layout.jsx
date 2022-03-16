import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="h-screen mx-auto font-bold text-white bg-gray-900 rounded-lg sm:w-full lg:w-96 flex flex-col">
      <header className="flex-none">
        <Header />
      </header>
      <main className="flex-1">
        {props.children}
      </main>
      <footer className="flex-none">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
