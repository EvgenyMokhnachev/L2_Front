import React, {Component} from 'react';
import './news-item.css';
import defaultImg from './kngihtfall1.jpg';

class NewsItem extends Component {

    render() {
        return (
            <div className="news-item">
                <div className="news-item-body">
                    <img alt={'news title'} width={'100%'} src={defaultImg}/>
                    <div className="news-card-title">
                        Запуск закрытого тестирования 12 января! Успей первым!
                    </div>
                    <div className="news-card-date">
                        13 Ноября, 2017
                    </div>

                    <div className="top-ornament"/>
                </div>
            </div>
        );
    }
}

export default NewsItem;
