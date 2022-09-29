import React, { useEffect, useState } from "react";
import Active from "../Active/Active";
import Break from "../break time/Break";
import Exercise from "../Exercise/Exercise";
import Introduct from "../introduct/Introduct";
import Show from "../show data/Show";
import "./product.css";

const Product = () => {
  // useState
  const [users, setUsers] = useState([]);

  //  useEffect
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    //  function prameter with props
  }, []);
  return (
    <div className="product-container">
      <div className="product-item">
        {users.map((user) => (
          <Show key={user.id} user={user}></Show>
        ))}
      </div>
      <div className="bg-white name-container">
        <Introduct></Introduct>
        <Break></Break>
        <Exercise></Exercise>
        <Active></Active>
      </div>
    </div>
  );
};

export default Product;
