import React from "react";
import TagFields from "./TagFields";

const FormatFields = ({format}) => {
    const handleChange = (e) => {
        // Do nothing
    }
    return(
        <form className="uk-form-stacked" style={{minWidth: "250px", marginRight: "40px"}}>
              <div className="uk-margin">
              <div className="uk-flex uk-flex-between">
                <label className="uk-form-label" htmlFor="form-stacked-text">
                  Title
                </label>
                    <button className="uk-button uk-button-link uk-text-capitalize">
                      [Delete Format]
                    </button>
                  </div>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Format Title..."
                    value={format.title}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-text">
                  Mail Field Name
                </label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Main numeric field name..."
                    value={format.mainNumericFieldName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="uk-margin">
                <div className="uk-flex uk-flex-between">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    Codes:
                  </label>
                  <div className="uk-flex uk-flex-right">
                    <input
                      className="uk-input uk-width-1-2"
                      id="form-stacked-text"
                      type="text"
                      placeholder="New code..."
                      style={{ height: "1.3em", marginRight: "3px" }}
                    />
                    <button className="uk-button uk-button-link uk-text-capitalize">
                      [ + ]
                    </button>
                  </div>
                </div>
                <div className="uk-form-controls">
                  <select multiple={true} name="code" className="uk-select">
                    {format.codes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <div className="uk-flex uk-flex-right">
                    <button className="uk-button uk-button-link uk-text-capitalize">
                      [ - ]
                    </button>
                  </div>
                </div>
              </div>

              <TagFields tagFields={format.tagFields}
              fieldTypes={["Text", "Boolean", "Number", "Date"]} />

              <div className="uk-margin">
                <div className="uk-form-controls uk-flex uk-flex-right">
                  <button className="uk-button uk-button-primary">SAVE</button>
                </div>
              </div>

            
            </form>
    )
}

export default FormatFields;