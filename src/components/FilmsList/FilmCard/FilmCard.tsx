import React from 'react';

import './film-card.scss';

import { Menu, MenuItem } from '@material-ui/core';
import Modal from '../../common/Modal/Modal';
import FilmForm from '../../FilmForm/FilmForm';
import DeleteFilmModal from '../../DeleteFilmForm/DeleteFilmModal';

import { useModal } from '../../../custom-hooks/modal.hook';

export interface FilmCardModel {
    id: number;
    title: string;
    genres: string[];
    year: number;
    imageUrl: string;
    rating: number;
    durationInMinutes: number;
    overview: string;
}

export interface FilmCardProps {
    film: FilmCardModel;
    openPage: (id: number) => void;
}

const FilmCard: React.FunctionComponent<FilmCardProps> = ({film, openPage}) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [showEditModal, toggleEditModal] = useModal();

    const handleEditButton = () => {
        toggleEditModal();
        handleClose();
    };

    const [showDeleteModal, toggleDeleteModal] = useModal();

    const handleDeleteButton = () => {
        toggleDeleteModal();
        handleClose();
    };

    return (
        <div className="film-wrapper">
            <img src={film.imageUrl} height="450" width="300" onClick={() => openPage(film.id)}/>
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
