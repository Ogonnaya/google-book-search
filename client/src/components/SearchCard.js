import React from "react";
import "./style.css";

function SearchCard(props) {
  return (
    <div>
      <div className="search-card jumbotron ">
        <div className="container">
          <form onSubmit={props.onClick}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={props.value}
                onChange={props.onChange}
                placeholder="Add books to your list!"
                required
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
