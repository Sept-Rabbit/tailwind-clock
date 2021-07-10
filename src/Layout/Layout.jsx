import React from "react";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="max-h-screen bg-gray-900 w-96 mx-auto my-12 rounded-lg p-2 text-white font-bold">
      <main className="h-full">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
