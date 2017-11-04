import React, {Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import Files from './../../components/files/files.js';
import News from './../../components/news/news.js';
import HeaderMenu from '../../components/header-menu/header-menu.js';
import Header from '../../components/header/header.js';
import Body from '../../components/body/body.js';
import NewsPage from '../../components/news/news-page/news-page.js';

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <HeaderMenu/>

                <Body>
                <Switch>
                    <Route exact path='/' component={News}/>
                    <Route path='/news/:id' component={NewsPage}/>
                    <Route path='/files' component={Files}/>
                </Switch>
                </Body>
            </div>
        );
    }
}

export default Home;
