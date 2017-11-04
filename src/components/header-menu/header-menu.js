import React, {Component} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import './header-menu.css';
import templarSymbol from './templarSymbol.png';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            sideWidth: '50%',
            currentPath: window.location.hash.slice(1)
        }
    }

    positionLogoCenter() {
        let templarSymbolWidth = this.refs.templarSymbol.offsetWidth,
            headerMenuBar = this.refs.headerMenuBar.offsetWidth,
            sideWidth = (100 - templarSymbolWidth * 100 / headerMenuBar)/2 + '%';
        this.setState({
            sideWidth
        });
    }

    componentDidMount() {
        this.positionLogoCenter();
        window.addEventListener("resize", ()=>{this.positionLogoCenter()});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", ()=>{this.positionLogoCenter()});
    }

    render() {
        return (
            <div className="header-menu-bar" ref="headerMenuBar">
                <div className="headerMenuSide" style={{width:this.state.sideWidth}}>
                    <NavLink className="header-button floatRight" to='/login'>Войти</NavLink>
                    <NavLink className="header-button floatRight" to='/register'>Регистрация</NavLink>
                    <NavLink className="header-button floatRight" to='//'>Главная</NavLink>
                </div>
                <div ref="templarSymbol" className="templarSymbol">
                    <img alt="templar symbol" src={templarSymbol}/>
                </div>
                <div className="headerMenuSide" style={{width:this.state.sideWidth}}>
                    <NavLink className="header-button" to='/files'>Файлы</NavLink>
                    <NavLink className="header-button" to='/forum'>Форум</NavLink>
                    <NavLink className="header-button" to='/about'>О проекте</NavLink>
                </div>
                <div style={{clear: 'both'}}/>
            </div>
        );
    }
}

export default Header;
