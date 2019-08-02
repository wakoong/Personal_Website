import React from "react";
import { connect } from "react-redux";
import Markdown from "react-markdown/with-html";

import ArticleFeed from "../ArticleFeed";
import * as api from "../../actions/api";
import mockArticle from "../../assets/md/test.md";


class Programming extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(api.fetchPosts())
  }

  render() {
    const {articles, loading, error } = this.props;
    const input = `# Test [link]("www.nba.com")`

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="main-background">
        <div className="main-block main-block_programming">
          <div className="article-list-wrapper">
            {articles.map(article => {
              return <ArticleFeed key={article.title} title={article.title} />
            })}
          </div>{" "}
          <div className="article-wrapper">
            <div className="article-share-btn" />
            <div>
              {/* <h1 className="article_title">
                test
              </h1> */}
              <Markdown source={input} escapeHtml={false} />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.api.articles,
    loading: state.api.loading,
    error: state.api.error 
  }
}

export default connect(mapStateToProps)(Programming);
