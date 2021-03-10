import React from 'react';

import './header.scss';

import Button from '../common/Button/Button';
import Search from '../Search/Search';

const Header: React.FunctionComponent = () => (
    <header className="header">
        <div className="header-top">
            <Button title={'+ ADD MOVIE'} primary={false}/>
        </div>
        <nav className="header-nav">
            <div className="header-nav-title">FIND YOUR MOVIE</div>
            <div className="search-bar">
                <Search />
                <Button title={'SEARCH'} primary={true}/>
            </div>
        </nav>
    </header>
);

export default Header;
