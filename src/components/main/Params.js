import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUserFormats,
  updateCurrentFormat,
  loadData,
} from "../../redux/DataDuck";
import { denormalizeArray, getSelectValues } from "../../utils/utils";

const Params = () => {
  const { userFormats, currentFormat } = useSelector((state) => state.data);

  const formatSelectRef = useRef();
  const codeSelectRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFormats());
    // ++++++ D U D A :
    // ¿Cómo ejecutar algo después de que se haya ejecutado dispatch, una vez que se actualizó el estado? (Async)
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
    console.log(params);
  };

  useEffect(() => {
    setParams((prevState) => ({ ...prevState, format: currentFormat._id }));
  }, [formatSelectRef, currentFormat._id]);

  const handleSubmit = async (e) => {
    const codes = getSelectValues(codeSelectRef.current);
    console.log(codes);
    let withDateParams = {...params};
    if (params.from) {
      const from = new Date(params.from);
      withDateParams = { ...params, from };
    }
    dispatch(loadData(withDateParams));
  };

  return (
    <div id="paramsCell" className="uk-width-1-1">
      <div id="paramsCellGrid" className="uk-grid-divider" uk-grid="true">
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
        <div id="codeCell" className="uk-form-controls">
          <label>Code:</label>
          <select
            multiple={true}
            name="code"
            ref={codeSelectRef}
            onChange={handleChange}
          >
            {currentFormat.codes &&
              currentFormat.codes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
          </select>
        </div>
        <div id="fromCell" className="uk-form-controls">
          <label>From:</label>
          <input type="date" name="from" onChange={handleChange}></input>
        </div>
        <div id="toCell">
          <label>To:</label>
          <input type="date" name="to" onChange={handleChange}></input>
        </div>
        <div id="updateButtonCell">
          <button className="uk-button" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Params;
