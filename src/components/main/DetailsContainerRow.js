import React from "react";

const DetailsContainerRow = ({ record, tagFields }) => {
  const getDisplayValue = (value) => {
    // Replaces true --> "Yes", false: "No"
    return value === true ? "Yes" : value === false ? "No" : value;
  };

  return (
    <tr key={record._id}>
      <td>{record.code}</td>
      <td>{record.value}</td>
      <td>{record.createdAt}</td>
      {tagFields &&
        tagFields.map((tagField) => (
          <td key={tagField._id}>
            {/* Validates that the field is in the record, if so, shows its value. If undefined, shows empty string */}
            {(record.tagValues.filter(
              (rec) => rec.fieldName === tagField.fieldName
            ).length &&
              getDisplayValue(
                record.tagValues.filter(
                  (rec) => rec.fieldName === tagField.fieldName
                )[0].value
              )) ||
              ""}
          </td>
        ))}
    </tr>
  );
};

export default DetailsContainerRow;
