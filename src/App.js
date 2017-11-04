import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Background from './components/background/background.js';
import './App.css';

import RegisterForm from './components/auth-form/register_form.js';
import LoginForm from './components/auth-form/login-form.js';

import Home from './apps/home/home.js';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Background/>

                <div className="AppContentBlock">
                    <HashRouter>
                        <Switch>
                            <Route path='/register' component={RegisterForm}/>
                            <Route path='/login' component={LoginForm}/>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default App;
