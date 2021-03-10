import React from 'react';

import './film-card.scss';

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

const FilmCard: React.FunctionComponent<FilmCardProps> = ({film}) => (
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
        <div className="additional-info-icon"></div>
    </div>
);

export default FilmCard;
