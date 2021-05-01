import React, { useState } from 'react';

import './header-search.scss';

import Button from '../../common/Button/Button';
import Search from '../../Search/Search';
import Modal from '../../common/Modal/Modal';
import FilmForm from '../../FilmForm/FilmForm';
import { useModal } from '../../../custom-hooks/modal.hook';
import { Link } from 'react-router-dom';

const HeaderSearch: React.FunctionComponent = () => {
    const [showModal, toggleModal] = useModal();
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <div className="header-search">
            <div className="header-top">
                <Button title={'+ ADD MOVIE'} primary={false} action={toggleModal}/>
            </div>
            <nav className="header-nav">
                <div className="header-nav-title">FIND YOUR MOVIE</div>
                <div className="search-bar">
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    <Link to={`search/${searchQuery}`}>
                        <Button title={'SEARCH'} primary={true}/>
                    </Link>
                </div>
            </nav>
            {showModal ? (
                <Modal onClose={toggleModal}>
                    <FilmForm closeModal={toggleModal}/>
                </Modal>
            ) : null}
        </div>
    );
};

export default HeaderSearch;
