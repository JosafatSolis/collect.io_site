import React from "react";

const Signup = () => {
  return (
    <div id="main" style={{ display: "flex", backgroundColor: "red" }}>
      <div id="leftMainCol" className="
      uk-width-1-2
      uk-height-small uk-panel
      uk-height-viewport 
      uk-flex 
      uk-flex-center 
      uk-flex-middle">
        <div
          id="leftColCardAndGrid"
          className="uk-card uk-card-default uk-card-body uk-height-1-1"
          uk-grid="true"
        >
          <form class="uk-form-stacked">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">
                Text
              </label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-stacked-text"
                  type="text"
                  placeholder="Some text..."
                />
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-select">
                Select
              </label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select">
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            <div class="uk-margin">
              <div class="uk-form-label">Radio</div>
              <div class="uk-form-controls">
                <label>
                  <input class="uk-radio" type="radio" name="radio1" /> Option
                  01
                </label>
                <br />
                <label>
                  <input class="uk-radio" type="radio" name="radio1" /> Option
                  02
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
