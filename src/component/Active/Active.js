import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./active.css";

const Active = () => {
  const showToast = () => toast("Wow so easy! interesting");
  return (
    <>
      {" "}
      <div className="mt-5  ms-3 me-3 active-item">
        <button onClick={showToast}>Active Completed</button>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Active;
