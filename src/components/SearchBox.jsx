import React from "react";

function SearchBox({ filter }) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search Seniors  Ex: vikash"
          onChange={filter}
        />
      </div>
    </div>
  );
}

export default SearchBox;
