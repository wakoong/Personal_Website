import React from 'react';
import ArticleContent from './ArticleContent';

class Programming extends React.Component {
    render() {
        const dummyArticle = ["uno", "dos", "tres", "quatro", "cinco", "sies"]
        return(
            <div className="main-content">
                <div id="article-feed-content" className="sidebar">
                    {dummyArticle.map(article => {
                        return <ArticleContent key={article} article={article} /> 
                    })}
                </div>
                <div id="article-feed">
                    feed
                </div>
            </div>
        )
    }
}

export default Programming;