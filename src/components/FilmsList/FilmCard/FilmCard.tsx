import React, { useState } from 'react';

import './film-card.scss';
import { Menu, MenuItem } from '@material-ui/core';
import Modal from '../../common/Modal/Modal';
import FilmForm from '../../FilmForm/FilmForm';
import DeleteFilmModal from '../../DeleteFilmForm/DeleteFilmModal';

export interface FilmCardModel {
    id: number;
    title: string;
    genres: string[];
    year: number;
    imageUrl: string;
}

export interface FilmCardProps {
    film: FilmCardModel;
}

const FilmCard: React.FunctionComponent<FilmCardProps> = ({film}) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [showEditModal, setShowEditModal] = useState(false);

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    };

    const handleEditButton = () => {
        toggleEditModal();
        handleClose();
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const toggleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handleDeleteButton = () => {
        toggleDeleteModal();
        handleClose();
    };

    return (
        <div className="film-wrapper">
            <img src={film.imageUrl} height="450" width="300"/>
            <div className="film-info">
                <div className="film-info-left">
                    <div className="film-info-left-title">{film.title}</div>
                    <div className="film-info-left-genres">{film.genres.join(', ')}</div>
                </div>
                <div className="film-info-right">
                    <div className="film-info-right-year">{film.year}</div>
                </div>
            </div>
            <div className="additional-info-icon" onClick={handleClick}></div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEditButton}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteButton}>Delete</MenuItem>
            </Menu>
            {showEditModal ? (
                <Modal onClose={toggleEditModal}>
                    <FilmForm />
                </Modal>
            ) : null}
            {showDeleteModal ? (
                <Modal onClose={toggleDeleteModal}>
                    <DeleteFilmModal />
                </Modal>
            ) : null}
        </div>
    )
};

export default FilmCard;
