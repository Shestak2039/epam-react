import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './films-list.scss';
import FilmCard from './FilmCard/FilmCard';
import { FilmCardModel } from '../../models/film-card.model';

export interface FilmsListProps {
    films: FilmCardModel[];
}

const FilmsList: React.FunctionComponent<FilmsListProps> = ({films}) => {
    const { searchQuery } = useParams<{searchQuery: string}>();
    const history = useHistory();
    const sortedFilms = films.filter((film) => !searchQuery || film.title.includes(searchQuery));
    
    useEffect(() => {
        if (searchQuery && sortedFilms.length === 0) {
            history.push('/not-found');
        }
    }, [searchQuery]);
    
    return (
        <div className="films-wrapper">
            <div className="count-movies">{sortedFilms.length} movies found</div>
            <div className="films">
                {sortedFilms.map(film => <FilmCard key={film.id} film={film}/>)}
            </div>
        </div>
    )
};

export default FilmsList;
