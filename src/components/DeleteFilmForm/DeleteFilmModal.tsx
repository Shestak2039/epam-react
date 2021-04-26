import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import './delete-film-form.scss';
import Button from '../common/Button/Button';
import { deleteFilmAsync } from '../../store/actions/film-actions';

interface DeleteFilmModalProps {
    filmId: string;
    deleteFilm: (filmId: string) => void;
    closeModal: () => void;
}

const DeleteFilmModal: React.FunctionComponent<DeleteFilmModalProps> = ({filmId, closeModal, deleteFilm}) => {
    const handleDeleteButton = () => {
        deleteFilm(filmId);
        closeModal();
    };
    return (
        <div className="delete-film-form">
            <h2 className="header-title">DELETE MOVIE</h2>
            <h4 className="confirm-text">Are you sure you want to delete this movie?</h4>
            <div className="buttons-area">
                <Button title={'CONFIRM'} primary={true} action={() => handleDeleteButton()}/>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        deleteFilm: (filmId: string) => dispatch(deleteFilmAsync(filmId))
    }
};

export default connect(null, mapDispatchToProps)(DeleteFilmModal);
