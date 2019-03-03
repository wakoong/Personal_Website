import React from 'react';
import ArticleContent from './ArticleContent';

class Programming extends React.Component {
    render() {
        const dummyArticle = ["uno", "dos", "tres", "quatro", "cinco", "sies", "diez", "test", "whta", "please", "help"]
        return(
            <div className="main-background">
                <div className="main-block">
                    <div id="article-list" className="sidebar">
                        {dummyArticle.map(article => {
                            return <ArticleContent key={article} article={article} /> 
                        })}
                    </div>
                    <div id="article">
                        article
                    </div>
                </div>
            </div>
        )
    }
}

export default Programming;