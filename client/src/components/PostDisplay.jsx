import React from "react";

const PostDisplay = props => {
  return (
    <div style={{ border: "1px solid #000000" }}>
      <div className="row">
        <div className="col-sm">
          <img src={props.data.thumbnail} />
        </div>
        <div className="col-sm">
          <h3
            style={{
              color: "darkBlue",
              fontWeight: "bolder",
              fontSize: "18px"
            }}
          >
            <a
              href="#"
              onClick={() =>
                props.searchRequest("", "", { count: 0 }, props.data.permalink)
              }
            >
              {props.data.title}
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div style={{ color: "red" }}>
            Comments: {props.data.num_comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDisplay;
