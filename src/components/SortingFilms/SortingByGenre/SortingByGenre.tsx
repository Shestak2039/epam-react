import React from 'react';

import './sorting-by-genre.scss';

export interface GenreModel {
    name: string;
    id: number;
    isSelected: boolean;
}

export interface SortingByGenreProps {
    genres: GenreModel[];
    setGenres: (selectedId: number) => void;
}

const SortingByGenre: React.FunctionComponent<SortingByGenreProps> = ({genres, setGenres}) => (
    <ul className="genres">
        {genres.map((genre) => <li data-testid={genre.id} key={genre.id} className={genre.isSelected ? 'genre selected' : 'genre'} onClick={() => setGenres(genre.id)}>{genre.name}</li>)}
    </ul>
);

export default SortingByGenre;
