import React from "react";

function SavedResult({ children }) {
  return (
    <div className="container mt-3">
      <div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default SavedResult;
