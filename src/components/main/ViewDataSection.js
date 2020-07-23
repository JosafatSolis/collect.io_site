import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBreadcrumb } from "../../redux/SessionDuck";
import Params from "./Params";
import ResultsSection from "./ResultsSection";

const ViewDataSection = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateBreadcrumb("View Data"));
    })
    return (
        <div id="paramsAndContentCell" className="uk-width-1-1 uk-height-1-1">
            <div
              id="paramsAndContentCellGrid"
              className="uk-grid-divider"
              uk-grid="true"
            >
              <Params />
              <ResultsSection />
            </div>
          </div>
    )
}

export default ViewDataSection;