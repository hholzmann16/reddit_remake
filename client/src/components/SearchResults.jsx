import React from "react";
import PostDisplay from "./PostDisplay.jsx";

const SearchResults = props => {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <h2>Results:</h2>
        </div>
        <div className="col-sm">
          <button
            disabled={props.before ? "" : "disabled"}
            onClick={() => {
              props.searchRequest(
                props.name,
                props.sort,
                {
                  count: props.pageNum - 1,
                  before: props.before
                },
                ""
              );
            }}
          >
            Previous
          </button>
          <button
            disabled={props.after ? "" : "disabled"}
            onClick={() => {
              props.searchRequest(
                props.name,
                props.sort,
                {
                  count: props.pageNum + 1,
                  after: props.after
                },
                ""
              );
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="searchScroll">
            <ul>
              {props.results.map((child, index) => {
                return (
                  <PostDisplay
                    data={child.data}
                    key={index}
                    searchRequest={props.searchRequest}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
