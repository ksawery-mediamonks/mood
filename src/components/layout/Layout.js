import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Home from "../../pages/index";

export default function Layout({ children, data }) {
  const [isDisabled, setIsDisabled] = useState(true);

  const isClicked = (data) => {
    setIsDisabled(!data);
  };

  return (
    <>
      <Navbar />
      <Home disabled={isDisabled}>{children}</Home>
      <Footer onClick={isClicked} />
    </>
  );
}
