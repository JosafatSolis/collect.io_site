import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBreadcrumb } from "../../redux/SessionDuck";
import FormatFields from "./FormatFields";

const AdminFormatsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBreadcrumb("Admin Formats"));
  });
  return (
    <div id="paramsAndContentCell" className="uk-width-1-1 uk-height-1-1">
      <div
        id="paramsAndContentCellGrid"
        className="uk-grid-divider"
        uk-grid="true"
      >
        <div id="paramsCell" className="uk-width-1-1">
            <div id="formatCell" className="uk-flex">
              <button className="uk-button uk-button-link uk-padding uk-padding-remove-top" >New Format [ + ]</button>
            </div>
          <div
            id="paramsCellGrid"
            className="uk-overflow-auto uk-flex uk-padding uk-padding-remove-top uk-padding-remove-right uk-padding-remove-bottom"
            style={{overflowX: "auto", overflowY:"hidden"}}
          >

            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />
            <FormatFields />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFormatsSection;
