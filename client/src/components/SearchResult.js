import React from "react";

function SearchResult({ children }) {
  return (
    <div>
      <div>
        <div className="container search-results">{children}</div>
      </div>
    </div>
  );
}

export default SearchResult;
