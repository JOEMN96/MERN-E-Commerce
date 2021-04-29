import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer>from Footer</footer>
    </>
  );
}

export default Layout;
