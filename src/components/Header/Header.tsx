import React, { useState } from 'react';

import './header.scss';

import Button from '../common/Button/Button';
import Search from '../Search/Search';
import Modal from '../common/Modal/Modal';
import FilmForm from '../FilmForm/FilmForm';

const Header: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <Button title={'+ ADD MOVIE'} primary={false} action={toggleModal}/>
                </div>
                <nav className="header-nav">
                    <div className="header-nav-title">FIND YOUR MOVIE</div>
                    <div className="search-bar">
                        <Search />
                        <Button title={'SEARCH'} primary={true}/>
                    </div>
                </nav>
            </header>
            {showModal ? (
                <Modal onClose={toggleModal}>
                    <FilmForm />
                </Modal>
            ) : null}
        </>
    )
};

export default Header;
