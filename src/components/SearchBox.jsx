import React from "react";

function SearchBox({ Search }) {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ex: akash"
          onChange={(e) => Search(e)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
