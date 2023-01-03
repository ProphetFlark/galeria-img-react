import React from "react";
import PropTypes from "prop-types";

const Card = ({ img, title, text, button }) => {
  return (
    <div className="card my-3" style={{ width: "18rem", objectFit: "cover" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a
          className="btn btn-primary"
          style={{ backgroundColor: `${button}`, borderColor: `${button}` }}
        >
          <span
            style={{
              color: `${button}`,
              filter: "invert(100%) contrast(700%)",
            }}
          >
            Color: {button}
          </span>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
};

export default Card;
