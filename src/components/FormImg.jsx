import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="d-block align-items-center w-75">
          <span
            className="font-weight-bold d-block text-center"
            style={{ fontSize: "2rem" }}
          >
            Buscar:
          </span>
          <input className="w-100" type="text" name="inputText" />
        </label>
        <button type="submit" className="btn btn-warning w-75 my-3">
          Buscar
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
