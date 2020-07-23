import React from "react";

const TagField = () => {
  return (
    <div>
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
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-stacked-select">
          Select
        </label>
        <div className="uk-form-controls">
          <select className="uk-select" id="form-stacked-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
      </div>

      <div className="uk-flex uk-flex-right">
        <button className="uk-button uk-button-link">[ + ]</button>
      </div>
    </div>
  );
};

export default TagField;
