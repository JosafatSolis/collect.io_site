import React from "react";
import StatsContainer from "./StatsContainer";
import ChartsContainer from "./ChartsContainer";
import DetailsContainer from "./DetailsContainer";

const ResultsSection = () => {
  return (
    <div id="contentCell" className="uk-width-1-1 uk-height-1-1">
      <ChartsContainer />
      <StatsContainer />
      <DetailsContainer />
    </div>
  );
};

export default ResultsSection;
