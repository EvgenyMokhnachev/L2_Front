import React, {Component} from 'react';
import NewsItem from './news-item/news-item.js';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            newsItems: []
        }
    }

    componentDidMount() {
        let rows = [];
        for (var i = 0; i < 6; i++) {
            rows.push({id: i, createdAt: new Date().getTime()-(90000000), updatedAt: new Date().getTime(), thumbnail: '', image: '', title: '', content: ''});
        }

        this.setState({
            newsItems: rows
        });
    }

    render() {
        return (
            <div>
                {this.state.newsItems.map((item, index)=>
                    <NewsItem item={item} key={index} />
                )}
            </div>
        );
    }

}

export default News;
