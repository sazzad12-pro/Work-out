import React from "react";
import "./break.css";

const Break = () => {
  // add break number
  const number = [
    { num1: "10s" },
    { num2: "20s" },
    { num3: "30s" },
    { num4: "40s" },
    { num5: "50s" },
  ];
  return (
    <div>
      <h4 className="ms-3 mt-3">Add to Break</h4>
      <div className="d-flex justify-content-around number align-items-center">
        <h6>{number[0].num1}</h6>
        <h6>{number[1].num2}</h6>
        <h6>{number[2].num3}</h6>
        <h6>{number[3].num4}</h6>
        <h6>{number[4].num5}</h6>
      </div>
    </div>
  );
};

export default Break;
