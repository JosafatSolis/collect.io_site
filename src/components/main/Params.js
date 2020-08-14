import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUserFormats,
  updateCurrentFormat,
  loadData,
} from "../../redux/DataDuck";
import { denormalizeArray, clearSelectValues } from "../../utils/utils";

const Params = () => {
  const { userFormats, currentFormat } = useSelector((state) => state.data);

  const formatSelectRef = useRef();
  const codeSelectRef = useRef();
  const fromDateRef = useRef();
  const toDateRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFormats());
  }, [dispatch]);

  const [params, setParams] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setParams((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    if (key === "format") dispatch(updateCurrentFormat(value));
  };

  useEffect(() => {
    setParams((prevState) => ({
      ...prevState,
      format: currentFormat._id,
      code: null,
    }));
  }, [formatSelectRef, currentFormat._id]);

  const handleSubmit = async (e) => {
    //const codes = getSelectValues(codeSelectRef.current);
    //console.log(codes);
    let withDateParams = { ...params };
    if (params.from) {
      const from = new Date(params.from);
      withDateParams = { ...params, from };
    }
    dispatch(loadData(withDateParams));
  };
  
  const handleClearSelectClick = (e) => {
    clearSelectValues(codeSelectRef.current);
    setParams(prevState => ({...prevState, code: null}));
  }

  const handleClearFromClick = (e) => {
    fromDateRef.current.valueAsDate = null;
    const {from, ...remaining} = params;
    setParams({...remaining});
  }

  const handleClearToClick = (e) => {
    toDateRef.current.valueAsDate = null;
    const {to, ...remaining} = params;
    setParams({...remaining});
  }

  return (
    <div id="paramsCell" className="uk-width-1-1">
      <div id="paramsCellGrid" className="uk-padding uk-padding-remove-top uk-padding-remove-right uk-padding-remove-bottom" uk-grid="true">
        <div id="formatCell" className="uk-flex">
          <label>Format:</label>
          <select
            className="uk-select"
            name="format"
            onChange={handleChange}
            ref={formatSelectRef}
          >
            {denormalizeArray(userFormats).map((format) => (
              <option key={format._id} value={format._id}>
                {format.title}
              </option>
            ))}
          </select>
        </div>
        <div id="codeCell" className="uk-form-controls uk-flex uk-flex-top">
          <label>Code:</label>
          <div className="uk-flex uk-flex-right uk-flex-column">
            <select
              multiple={true}
              name="code"
              ref={codeSelectRef}
              onChange={handleChange}
              className="uk-select"
            >
              {currentFormat.codes &&
                currentFormat.codes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
            </select>
            <button onClick={handleClearSelectClick} className="uk-button uk-button-link uk-flex uk-flex-right">Clear</button> 
          </div>
        </div>
        <div id="fromCell" className="uk-form-controls">
          <label>From:</label>
          <input
            className="uk-input"
            type="date"
            name="from"
            ref={fromDateRef}
            onChange={handleChange}
          ></input>
          <button onClick={handleClearFromClick} className="uk-button uk-button-link uk-width-1-1 uk-flex uk-flex-right">Clear</button> 
        </div>
        <div id="toCell">
          <label>To:</label>
          <input
            className="uk-input"
            type="date"
            name="to"
            ref={toDateRef}
            onChange={handleChange}
          ></input>
          <button onClick={handleClearToClick} className="uk-button uk-button-link uk-width-1-1 uk-flex uk-flex-right">Clear</button> 
        </div>
        <div id="updateButtonCell">
          <button className="uk-button uk-button-large uk-button-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Params;
