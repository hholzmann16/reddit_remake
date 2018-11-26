import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      sortType: "new"
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.sortChange = this.sortChange.bind(this);
  }

  /**
   * Name change handler
   *
   * @param {Object} event
   */
  onNameChange(event) {
    this.setState({ searchName: event.target.value });
  }

  /**
   * Sort type change handler
   *
   * @param {Object} event
   */
  sortChange(event) {
    this.setState({ sortType: event.target.value });
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="row" style={{ marginRight: "15px" }}>
          <div className="col-lg">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Subreddit
                </span>
              </div>
              <input
                type="text"
                value={this.state.searchName}
                onChange={this.onNameChange}
                className="form-control"
                aria-label="Subreddit"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div className="col-lg">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Sort By:
                </span>
              </div>
              <select value={this.state.sortType} onChange={this.sortChange}>
                <option value="new">new</option>
                <option value="hot">hot</option>
                <option value="controversial">controversial</option>
                <option value="top">top</option>
                <option value="rising">rising</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button
              className="btn btn-primary"
              onClick={() =>
                this.props.searchRequest(
                  this.state.searchName,
                  this.state.sortType,
                  { count: 0 },
                  ""
                )
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
