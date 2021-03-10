import React, { useState } from 'react';

import './sorting-films.scss';

import SortingByGenre, { GenreModel } from './SortingByGenre/SortingByGenre';
import Filter, { SortOptionModel } from './SortingByDate/Filter';

const mockGenres: GenreModel[] = [
    {id: 1, name: 'ALL', isSelected: true},
    {id: 2, name: 'DOCUMENTARY', isSelected: false},
    {id: 3, name: 'COMEDY', isSelected: false},
    {id: 4, name: 'HORROR', isSelected: false},
    {id: 5, name: 'CRIME', isSelected: false}
];

const mockOptions: SortOptionModel[] = [
    {id: 1, name: 'RELEASE DATE', isSelected: true},
    {id: 2, name: 'RATING', isSelected: false},
    {id: 3, name: 'YEAR', isSelected: false},
];

const SortingFilms: React.FunctionComponent = () => {
    const [genres, setGenres] = useState(mockGenres);

    const changeSelectedGenre = (newSelectedId: number) => {
        setGenres(genres.map(genre => ({...genre, isSelected: newSelectedId === genre.id})));
    };

    const [options, setOptions] = useState(mockOptions);

    const changeSelectedOption = (newSelectedId: number) => {
        setOptions(options.map(option => ({...option, isSelected: newSelectedId === option.id})));
    };

    return (
        <div className="sorting-bar">
            <SortingByGenre genres={genres} setGenres={changeSelectedGenre}/>
            <Filter options={options} setOptions={changeSelectedOption}/>
        </div>
    );
};

export default SortingFilms;
