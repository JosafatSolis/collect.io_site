import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBreadcrumb } from "../../redux/SessionDuck";
import FormatFields from "./FormatFields";
import { denormalizeArray } from "../../utils/utils";

const AdminFormatsSection = () => {
  const dispatch = useDispatch();
  const { userFormats, addingNewFormat } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(updateBreadcrumb("Admin Formats"));
  });

  const handleNewFormatClick = (e) => {
      //dispatch(updateAddingNewFormat(true));
  }
  return (
    <div id="paramsAndContentCell" className="uk-width-1-1 uk-height-1-1">
      <div
        id="paramsAndContentCellGrid"
        className="uk-grid-divider"
        uk-grid="true"
      >
        <div id="paramsCell" className="uk-width-1-1">
          {!addingNewFormat ? (
            <div id="formatCell" className="uk-flex">
              <button className="uk-button uk-button-link uk-padding uk-padding-remove-top" onClick={handleNewFormatClick}>
                New Format [ + ]
              </button>
            </div>
          ):null}
          <div
            id="paramsCellGrid"
            className="uk-overflow-auto uk-flex uk-padding uk-padding-remove-top uk-padding-remove-right uk-padding-remove-bottom"
            style={{ overflowX: "auto", overflowY: "hidden" }}
          >
            {userFormats &&
              denormalizeArray(userFormats).map((format) => (
                <FormatFields key={format._id} format={format} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFormatsSection;
