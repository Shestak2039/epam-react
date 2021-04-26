import React from 'react';

import './header-film.scss';
import Button from '../../common/Button/Button';
import { FilmCardModel } from '../../../models/film-card.model';

export interface HeaderFilmProps {
    film: FilmCardModel;
    openPage: (id: string | undefined) => void;
}

const HeaderFilm: React.FunctionComponent<HeaderFilmProps> = (
    {film: {title, imageUrl, rating, genres, year, durationInMinutes, overview}, openPage}) => {
    return (
        <div className="header-background">
            <div className="header-top">
                <Button title={'Search'} primary={false} action={() => openPage(undefined)}/>
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
