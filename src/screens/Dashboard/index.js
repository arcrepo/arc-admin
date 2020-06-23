import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";

// Screens
import Home from "./Home";
import Upload from "./Upload";

export default (props) => {
  const activeItem = useSelector((state) => state.activeItem);
  return (
    <div style={{ margin: 10 }}>
      <Header />
      <SideMenu />
      <br />

      {activeItem === "home" ? (
        <Home />
      ) : activeItem === "upload" ? (
        <Upload />
      ) : null}
    </div>
  );
};
