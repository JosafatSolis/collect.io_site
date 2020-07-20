import React from "react";
import { useSelector } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { checkIfEmptyOject } from "../../utils/utils";
import DetailsContainerRow from "./DetailsContainerRow";

const DetailsContainer = () => {
  const { data, currentFormat } = useSelector((state) => state.data);
  return (
    <div>
      {!checkIfEmptyOject(data) && (
        <div>
          <h2>Details</h2>
          <ReactHTMLTableToExcel
            id="saveTableButton"
            className="download-table-xls-button uk-button"
            table="detailsTable"
            filename="Collectio Details"
            sheet="Details"
            buttonText="Download to Excel"
          />
          <table id="detailsTable" className="uk-table uk-table-striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Value</th>
                <th>Date</th>
                {currentFormat.tagFields &&
                  currentFormat.tagFields.map((tagField) => (
                    <th key={tagField._id}>{tagField.fieldName}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {!checkIfEmptyOject(data) &&
                data.map((record) => (
                  <DetailsContainerRow
                    key={record._id}
                    record={record}
                    tagFields={currentFormat.tagFields}
                  />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DetailsContainer;
