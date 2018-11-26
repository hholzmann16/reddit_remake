import React from "react";
import PostDisplay from "./PostDisplay.jsx";
import CommentDisplay from "./CommentDisplay.jsx";

const CommentResults = props => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <PostDisplay data={props.post} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="searchScroll">
            <ul>
              {props.comments.map((comment, index) => {
                return <CommentDisplay data={comment.data} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentResults;
