import React from "react";
import Header from "../component/organisms/Header";
import LeftSideMenu from "../component/organisms/LeftSideMenu";
import MainContent from "../containers/MainContent";

const MainLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <LeftSideMenu />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
