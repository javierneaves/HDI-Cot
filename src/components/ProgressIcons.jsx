import React from "react";
import "./progressIcons.css";

const ProgressIcons = () => {
  return (
    <>
        <h1 className="text-primary text-center p-4">Cotiza tu seguro de auto</h1>
      <div className="container justify-content-between mt-5">
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary btnBackground">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
          <div className="col text-center text-white">
            <button className="btn btn-secondary btnBackground" disabled>
              <span className="material-symbols-outlined">directions_car</span>
            </button>
          </div>
          <div className="col text-center">
            <button className="btn btn-secondary btnBackground" disabled>
              <span className="material-symbols-outlined">badge</span>
            </button>
          </div>
          <div className="col text-center">
            <button className="btn btn-secondary btnBackground" disabled>
              <span className="material-symbols-outlined">description</span>
            </button>
          </div>
          <div className="col text-center">
            <button className="btn btn-secondary btnBackground" disabled>
              <span className="material-symbols-outlined">payments</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressIcons;
