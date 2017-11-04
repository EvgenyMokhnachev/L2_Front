import React, {Component} from 'react';
import NewsItem from './news-item/news-item.js';

class News extends Component {

    render() {
        return (
            <div>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        );
    }
}

export default News;
