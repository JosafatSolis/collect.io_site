import React from "react";
import { useSelector } from "react-redux";
import { checkIfEmptyOject } from "../../utils/utils";
import DetailsContainerRow from "./DetailsContainerRow";

const DetailsContainer = () => {
  const { data, currentFormat } = useSelector((state) => state.data);
  return (
    <div>
      <h1>Details Container</h1>
      <table className="uk-table uk-table-striped">
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
  );
};

export default DetailsContainer;
