import React, { Component } from 'react';

import MenuIcon from '../../assets/icons/MenuIcon'
import './Header.css'
import logo from '../../assets/img/logo.png'

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="content">
                    <MenuIcon />
                    <h1>AnimeApp</h1>
                    <div className="logo">
                        <img src={logo} widt="32px" height="32px"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;