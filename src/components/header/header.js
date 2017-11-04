import React, {Component} from 'react';
import './header.css';
import headerLogo from './headerLogo.jpg';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="headerImage" style={{backgroundImage: 'url('+headerLogo+')'}}/>
                {/*<img width={'100%'} src={headerLogo}/>*/}
            </div>
        );
    }

}

export default Header;