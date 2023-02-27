import React from "react";
import "./MyCard.css";

const MyCard = (props) => {
  const { cardtitle, cardbody, cardimagepath } = props;
  return (
    <div className="card">
      <img
        src={`${cardimagepath}`}
        className="imagecss card-img-container"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{cardtitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{cardbody}</h6>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default MyCard;
