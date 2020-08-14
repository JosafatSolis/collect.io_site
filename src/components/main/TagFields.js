import React from "react";

const TagFields = ({ tagFields, fieldTypes }) => {
  const handleChange = (e) => {
    // Do nothing
  }
  return (
    <div
      className="uk-card uk-card-default uk-card-body uk-padding-small"
      style={{ margin: "-10px" }}
    >
      <span className="uk-text">Tag Fields</span>
      {tagFields &&
        Array.isArray(tagFields) &&
        tagFields.map((tagField) => (
          <div key={tagField._id} className="uk-padding uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div className="uk-margin">
              <div className="uk-flex uk-flex-between">
                <label className="uk-form-label" htmlFor="form-stacked-text">
                  Field Name
                </label>
                <button className="uk-button uk-button-link">[ - ]</button>
              </div>

              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-stacked-text"
                  type="text"
                  placeholder="Field Name..."
                  value={tagField.fieldName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-select">
                Select
              </label>
              <div className="uk-form-controls">
                <select className="uk-select" id="form-stacked-select" defaultValue={tagField.type}>
                  {fieldTypes.map(fieldType => (
                     <option key={fieldType} value={fieldType} >{fieldType}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      <div className="uk-flex uk-flex-right">
        <button className="uk-button uk-button-link">[ + ]</button>
      </div>
    </div>
  );
};

export default TagFields;
