import React, { useState } from 'react';

import './sorting-films.scss';

import SortingByGenre, { GenreModel } from './SortingByGenre/SortingByGenre';
import Filter, { SortOptionModel } from './SortingByDate/Filter';

export interface SortingFilmsProps {
    sortFilms: (filter: GenreModel | undefined, sort: SortOptionModel | undefined) => void;
}

let mockGenres: GenreModel[] = [
    {id: 1, name: 'ALL', isSelected: true},
    {id: 2, name: 'DOCUMENTARY', isSelected: false},
    {id: 3, name: 'DRAMA', isSelected: false},
    {id: 4, name: 'HORROR', isSelected: false},
    {id: 5, name: 'THRILLER', isSelected: false}
];

let mockOptions: SortOptionModel[] = [
    {id: 1, name: 'NAME', isSelected: true},
    {id: 2, name: 'YEAR', isSelected: false},
];

const SortingFilms: React.FunctionComponent<SortingFilmsProps> = ({sortFilms}) => {
    const [genres, setGenres] = useState(mockGenres);

    const changeSelectedGenre = (newSelectedId: number) => {
        const newGenres = genres.map(genre => ({...genre, isSelected: newSelectedId === genre.id}));

        mockGenres = newGenres;
        setGenres(newGenres);

        sortFilms(newGenres.find(genre => genre.isSelected), options.find(option => option.isSelected));
    };

    const [options, setOptions] = useState(mockOptions);

    const changeSelectedOption = (newSelectedId: number) => {
        const newOptions = options.map(option => ({...option, isSelected: newSelectedId === option.id}));

        mockOptions = newOptions;
        setOptions(newOptions);

        sortFilms(genres.find(genre => genre.isSelected), newOptions.find(option => option.isSelected));
    };

    return (
        <div className="sorting-bar">
            <SortingByGenre genres={genres} setGenres={changeSelectedGenre}/>
            <Filter options={options} setOptions={changeSelectedOption}/>
        </div>
    );
};

export default SortingFilms;
