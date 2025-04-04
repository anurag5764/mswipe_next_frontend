import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = props => {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="secondary" />
      { props.loaderText !==undefined && (<div className="loader-text mt-4">{ props.loaderText}</div>)}
    </div>
  );
};

export default Loader;
