import * as React from "react";
import Navbar from "../components/Navbar";
import "../assets/all.sass";

const Layout = ({ children }) => {
  return(
<>
      <Navbar />

      <div>{children}</div>
</>
);
};

export default Layout;
