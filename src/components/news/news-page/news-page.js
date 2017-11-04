import React, {Component} from 'react';
import './news-page.css';


class NewsPage extends Component {

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
            <div > NEWS {this.props.match.params.id}</div>
        );
    }
}

export default NewsPage;
