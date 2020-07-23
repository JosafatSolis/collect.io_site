import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import SectionContainer from "./SectionContainer";

const MainRightCol = () => {
  return (
    <div id="rightMainCol" className="uk-height-1-1 uk-width-1-1">
      <div
        id="rightColCard"
        className="uk-height-1-1 uk-card uk-card-default uk-card-body uk-padding-remove-left uk-padding-remove-right uk-padding-remove-bottom"
      >
        <div id="rightColCardGrid" className="uk-grid-divider" uk-grid="true">
          <Breadcrumb />
          <SectionContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainRightCol;
