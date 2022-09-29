import React from "react";
import "./break.css";

const Break = ({ totalSecond }) => {
  return (
    <div>
      <h4 className="ms-3 mt-3">Add to Break</h4>
      <div className="d-flex justify-content-around number align-items-center">
        <h6 onClick={(e) => totalSecond(e)}>10s</h6>
        <h6 onClick={(e) => totalSecond(e)}>20s</h6>
        <h6 onClick={(e) => totalSecond(e)}>30s</h6>
        <h6 onClick={(e) => totalSecond(e)}>40s</h6>
        <h6 onClick={(e) => totalSecond(e)}>50s</h6>
      </div>
    </div>
  );
};

export default Break;
