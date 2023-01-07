import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="d-block align-items-center mx-auto ">
          <span
            className="font-weight-bold d-block text-center my-3"
            style={{ fontSize: "2rem" }}
          >
            Buscar imágenes:
          </span>
          <input
            className="w-100"
            style={{ width: "80vw", borderWidth: "3px" }}
            type="text"
            name="inputText"
          />
        </label>
        <button
          type="submit"
          className="btn btn-warning d-block align-items-center my-3 mx-auto"
          style={{ width: "81vw" }}
        >
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
