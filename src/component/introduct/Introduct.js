import React from "react";
import man from "../../image/man.png";
import "./introduct.css";

const Introduct = () => {
  return (
    <div className="ms-1">
      <div className="introduct d-flex align-items-center">
        <img src={man} alt="" />
        <h5 className="ms-1 bolder">sazzad</h5>
      </div>
      <div className="d-flex mt-3 me-3 introduct-item">
        <div className="ms-3">
          <h4>
            60<small>kg</small>
          </h4>
          <p>Weight</p>
        </div>
        <div className="ms-3">
          <h4>6.6</h4>
          <p>Height</p>
        </div>
        <div className="ms-3">
          <h4>25y</h4>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Introduct;
