import React from 'react';
import styles from './LatestNews.module.scss';
import Image from 'next/image'

export default function LatestNews(props) {
    const { articles, description, headline } = props || {};

    // Helper function to format the publish date
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return { day, month };
    }

    return (
    <section id="section-news">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <h2>{headline}</h2>
                    <p>{description}</p>
                    <div className="spacer-20"></div>
                </div>

                {articles.nodes.map((article, index) => {
                    const { day, month } = formatDate(article.newsArticleFields.publishDate);
                    return (
                        <div className="col-lg-4 mb10" key={index}>
                            <div className="bloglist s2 item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="date-box">
                                            <div className="m">{day}</div>
                                            <div className="d">{month}</div>
                                        </div>
                                        <img alt="" src={article.newsArticleFields.image.node.sourceUrl} className="lazy" />
                                    </div>
                                    <div className="post-text">
                                        <h4><a href="news-single.html">{article.newsArticleFields.title}<span></span></a></h4>
                                        <p>{article.newsArticleFields.description}</p>
                                        <a className="btn-line" href={article.slug}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}
