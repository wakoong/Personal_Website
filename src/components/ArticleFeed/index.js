import React from "react";

class ArticleFeed extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <article className="article-feed">
        <div className="feed_text-wrapper">
          <h1 className="feed_title">
            {" "}
            {title}
            {/* Green, Curry, Durant fined for criticizing officials{" "} */}
          </h1>{" "}
          <div className="feed_info">
            <div className="feed_link"> category </div>{" "}
            <span className="feed_timestamp"> 1 day </span>{" "}
          </div>{" "}
        </div>{" "}
      </article>
    );
  }
}

export default ArticleFeed;
