import React from 'react';
import { Link } from "@reach/router";

class ArticleContent extends React.Component {
    render() {
        const { article } = this.props
        return(
            <Link to="/contact" className="article-btn">
                {`ARTICLE #${article}`}
            </Link>
        )
    }
}

export default ArticleContent;