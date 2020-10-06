import React from "react";

function Card({ props }) {
  return (
    <div className="card mb-1">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>College : {props.college}</p>
        <p>Categories: {props.category}</p>
        <p>Batch: {props.Batch}</p>
        <p>Mobile: {props.Mobile}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Card;
