import React from 'react';

import './films-list.scss';
import FilmCard, { FilmCardModel } from './FilmCard/FilmCard';

export interface FilmsListProps {
    films: FilmCardModel[];
    openPage: (id: number) => void;
}

const FilmsList: React.FunctionComponent<FilmsListProps> = ({films, openPage}) => {
    return (
        <div className="films-wrapper">
            <div className="count-movies">{films.length} movies found</div>
            <div className="films">
                {films.map(film => <FilmCard key={film.id} film={film} openPage={openPage}/>)}
            </div>
        </div>
    )
};

export default FilmsList;
