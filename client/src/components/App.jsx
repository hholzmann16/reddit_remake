import React from "react";
import axios from "axios";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import CommentResults from "./CommentResults.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      results: [],
      sortType: "new",
      pageNum: 0,
      before: null,
      after: null,
      post: {},
      comments: [],
      displayComments: false
    };
    this.searchRequest = this.searchRequest.bind(this);
  }

  /**
   * Get posts from the Reddit API
   *
   * Conditional get request depending on posts or comments of a post
   */
  searchRequest(name, sort, params, permalink) {
    let url = "https://www.reddit.com";

    params.limit = 25;

    if (permalink != "") {
      url += permalink + ".json";
      params = {};
    } else {
      this.setState({
        searchName: name,
        sortType: sort,
        pageNum: params.count
      });
      url += `/r/${name}/${sort}.json`;
    }
    axios
      .get(url, {
        crossdomain: true,
        params
      })
      .then(res => {
        console.log(res.data, "this is res");
        if (permalink != "") {
          this.setState({
            displayComments: true,
            post: res.data[0].data.children[0].data,
            comments: res.data[1].data.children,
            before: null,
            after: null
          });
        } else {
          this.setState({
            displayComments: false,
            results: res.data.data.children,
            before: res.data.data.before,
            after: res.data.data.after
          });
        }
      })
      .catch(err => {
        this.setState({ results: [] });
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Reddit Posts</h1>
          </div>
        </div>
        <Search searchRequest={this.searchRequest} />
        {this.state.displayComments ? (
          <CommentResults
            post={this.state.post}
            comments={this.state.comments}
          />
        ) : (
          <SearchResults
            searchRequest={this.searchRequest}
            name={this.state.searchName}
            sort={this.state.sortType}
            pageNum={this.state.pageNum}
            before={this.state.before}
            after={this.state.after}
            results={this.state.results}
          />
        )}
      </div>
    );
  }
}

export default App;
