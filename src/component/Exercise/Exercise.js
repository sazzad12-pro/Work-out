import React from "react";
import "./exercise.css";

const Exercise = () => {
  return (
    <div className="mt-5 ms-3">
      <h4>Exercise Details</h4>
      <div className="d-flex justify-content-around align-items-center  exercise-item">
        <p className="fw-bolder">Exercise Time</p>
        <p className="fw-light">00scond</p>
      </div>
      <div className="d-flex justify-content-around align-items-center  mt-3 exercise-item">
        <p className="fw-bolder">Break Time</p>
        <p className="fw-light">00scond</p>
      </div>
    </div>
  );
};

export default Exercise;
