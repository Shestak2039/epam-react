import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './header-film.scss';
import Button from '../../common/Button/Button';
import { FilmCardModel } from '../../../models/film-card.model';

export interface HeaderFilmProps {
    films: FilmCardModel[];
}

const HeaderFilm: React.FunctionComponent<HeaderFilmProps> = ({films}) => {
    const { filmId } = useParams<{filmId: string}>();
    
    const {
        title = '', imageUrl = '', rating = 0, genres = [], year = '', durationInMinutes = 0, overview = ''
    } = films.find(film => filmId === film.id) as FilmCardModel || {};
    
    return (
        <div className="header-background">
            <div className="header-top">
                <Link to="/home">
                    <Button title={'Search'} primary={false} />
                </Link>
            </div>
            <div className="header-film">
                <img className="header-film-image" src={imageUrl} height="350" width="250" />
                <div className="header-film-info">
                    <div className="header-film-info-title-and-rating">
                        <div className="header-film-info-title">{title}</div>
                        <div className="header-film-info-rating">{rating}</div>
                    </div>
                    <div className="header-film-info-genres">{genres.join(', ')}</div>
                    <div className="header-film-info-year-and-duration">
                        <div className="header-film-info-year">{year.split('-')[0]}</div>
                        <div className="header-film-info-duration">{durationInMinutes + 'min'}</div>
                    </div>
                    <div className="header-film-info-overview">{overview}</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderFilm;
