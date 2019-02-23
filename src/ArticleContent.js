import React from 'react';

class ArticleContent extends React.Component {
    render() {
        const { article } = this.props
        return(
            <div className="article-content">
                {`ARTICLE #${article}`}
            </div>
        )
    }
}

export default ArticleContent;