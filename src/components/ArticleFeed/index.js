import React from "react";

class ArticleFeed extends React.Component {
  render() {
    return (
      <article className="article-feed">
        <div className="feed_text-wrapper">
          <h1 className="feed_title">
            {" "}
            Green, Curry, Durant fined for criticizing officials{" "}
          </h1>{" "}
          <div className="feed_info">
            <div className="feed_link"> JavaScript </div>{" "}
            <span className="feed_timestamp"> 1 d </span>{" "}
          </div>{" "}
        </div>{" "}
      </article>
    );
  }
}

export default ArticleFeed;
