import React from "react";
import "./show.css";

const Show = ({ user }) => {
  const { name, age, time, image, about } = user;
  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{about}</p>
          <p className="card-text">{age}</p>
          <p className="card-text">{time}</p>
        </div>
        <button
          className="border btn bg-primary text-white"
          onClick={() => addToCard(time)}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Show;
