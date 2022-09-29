import React, { useEffect, useState } from "react";
import Active from "../Active/Active";
import Break from "../break time/Break";

import Introduct from "../introduct/Introduct";
import Show from "../show data/Show";
import "./product.css";

const Product = () => {
  // useState
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [breakTime, setBreak] = useState(0);

  //  useEffect
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //  function prameter with props
  const addToCard = (time) => setCount(count + time);
  // break time section function
  const totalSecond = (e) => {
    const breakValue = parseFloat(e.target.innerText);
    setBreak(breakValue);
    let setdata = {};
    const stored = localStorage.getItem("time");
    if (stored) {
      setdata = JSON.parse(stored);
    }

    const quantity = setdata[breakValue];
    if (quantity) {
      const newQuantity = quantity + 1;
      setdata[breakValue] = newQuantity;
    } else {
      setdata[breakValue] = 1;
    }

    localStorage.setItem("time", JSON.stringify(setdata));
  };

  return (
    <div className="product-container">
      <div className="product-item">
        {users.map((user) => (
          <Show key={user.id} user={user} addToCard={addToCard}></Show>
        ))}
      </div>
      <div className="bg-white name-container">
        <Introduct></Introduct>
        <Break totalSecond={totalSecond}></Break>
        <div className="mt-5 ms-3">
          <h4>Exercise Details</h4>
          <div className="d-flex justify-content-around align-items-center  exercise-item">
            <p className="fw-bolder">Exercise Time</p>
            <p className="fw-light">{count}second</p>
          </div>
          <div className="d-flex justify-content-around align-items-center  mt-3 exercise-item">
            <p className="fw-bolder">Break Time</p>
            <p className="fw-light">{breakTime}scond</p>
          </div>
        </div>
        <Active></Active>
      </div>
    </div>
  );
};

export default Product;
