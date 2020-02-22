import React from "react";
import "./style.css";

function BookItemCard(props) {
  return (
    <div className="card mb-3 book-card">
      <div className="row">
        <div className="col-md-2">
          <div className="card-body">
            <img src={props.thumbnail} className="card-img" alt={props.title} />
          </div>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Written By: {props.author}</p>
            <p className="card-text">Desc: {props.description}</p>
            <div className="card-buttons">
              <a
                href={props.href}
                target="_blank"
                className="btn btn-outline-dark"
                role="button"
              >
                View
              </a>
              {window.location.pathname === "/" ? (
                <span
                  data-index={props.index}
                  className="save btn btn-outline-success"
                  onClick={props.save}
                >
                  Save
                </span>
              ) : (
                <span
                  data-index={props.index}
                  className="delete btn btn-outline-danger"
                  onClick={props.delete}
                >
                  Delete
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItemCard;
