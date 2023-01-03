import React from "react";

const Loading = () => {
  return (
    <div className="d-block align-items-center text-center">
      <strong>Cargando...</strong>
      <div className="spinner-border ms-3" role="status" aria-hidden="true" />
    </div>
  );
};

export default Loading;
