import React from 'react';

import './delete-film-form.scss';
import Button from '../common/Button/Button';

const DeleteFilmModal: React.FunctionComponent = () => (
    <div className="delete-film-form">
        <h2 className="header-title">DELETE MOVIE</h2>
        <h4 className="confirm-text">Are you sure you want to delete this movie?</h4>
        <div className="buttons-area">
            <Button title={'CONFIRM'} primary={true} />
        </div>
    </div>
);

export default DeleteFilmModal;
