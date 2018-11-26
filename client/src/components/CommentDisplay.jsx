import React from "react";

const CommentDisplay = props => {
  return (
    <div style={{ border: "1px solid #000000" }}>
      <div className="row">
        <div className="col-sm">
          <div style={{ color: "red" }}>User: {props.data.author}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <p>{props.data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentDisplay;
