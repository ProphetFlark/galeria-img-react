import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-center bg-primary">
      <div className="container-fluid text-center">
        <p className="navbar-brand h1 text-center">
          {" "}
          Cristopher Paiz - &copy; {new Date().getFullYear()}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
