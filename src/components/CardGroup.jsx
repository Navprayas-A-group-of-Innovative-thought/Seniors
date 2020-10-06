import React from "react";
import Card from "./Card";

function CardGroup({ seniors }) {
  console.log(seniors);
  if (seniors) {
    return (
      <div className="container">
        {seniors.map((senior) => {
          return <Card key={senior.id} props={senior} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="container">
        <p className="text-center bold">No Results Found</p>
      </div>
    );
  }
}

export default CardGroup;
