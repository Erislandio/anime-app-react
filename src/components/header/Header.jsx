import React, { Component } from 'react';

import MenuIcon from '../../assets/icons/MenuIcon'
import './Header.css'
import logo from '../../assets/img/logo.png'
import iconSearch from '../../assets/img/lupa.png'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: ''
        }

    }

    openSearch = () => {
        this.setState({ open: !this.state.open })
    }


    handleSearch = () => {
        this.props.search(this.state.value)
    }

    render() {
        console.log(this)
        return (
            <React.Fragment>
                <div id="header">
                    <div className="content">
                        <MenuIcon />
                        <div className="logo">
                            <img src={logo} widt="32px" height="32px" />
                        </div>
                        <div className="search" onClick={this.openSearch.bind(this)}>
                            <img src={iconSearch} />
                        </div>
                    </div>
                </div>
                <div className={(this.state.open ? ' open ' : ' ') + ' searchbar '}>
                    <input type="text" id="search" className="seactInput" onChange={e => this.setState({ value: e.target.value })} />
                    <button className="procurar-btn" onClick={this.handleSearch.bind(this)}>OK</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;