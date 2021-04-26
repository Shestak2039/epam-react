import React, { Dispatch, useState } from 'react';

import './sorting-films.scss';

import SortingByGenre, { GenreModel } from './SortingByGenre/SortingByGenre';
import Filter, { SortOptionModel } from './SortingByDate/Filter';
import { SortOptions } from '../../models/sort.model';
import { filterFilms, sortFilms } from '../../store/actions/film-actions';
import { connect } from 'react-redux';

export interface SortingFilmsProps {
    sortFilms: (sortField: SortOptions) => void;
    filterFilms: (genreName: string) => void;
}

let mockGenres: GenreModel[] = [
    {id: 1, name: 'ALL', isSelected: true},
    {id: 2, name: 'DOCUMENTARY', isSelected: false},
    {id: 3, name: 'DRAMA', isSelected: false},
    {id: 4, name: 'HORROR', isSelected: false},
    {id: 5, name: 'THRILLER', isSelected: false}
];

let mockOptions: SortOptionModel[] = [
    {id: 1, name: SortOptions.RATING, isSelected: true},
    {id: 2, name: SortOptions.YEAR, isSelected: false},
];

const SortingFilms: React.FunctionComponent<SortingFilmsProps> = ({sortFilms, filterFilms}) => {
    const [genres, setGenres] = useState(mockGenres);

    const changeSelectedGenre = (newSelectedId: number) => {
        const newGenres = genres.map(genre => ({...genre, isSelected: newSelectedId === genre.id}));

        mockGenres = newGenres;
        setGenres(newGenres);

        filterFilms(newGenres.find(newGenre => newGenre.isSelected)?.name || 'ALL');
    };

    const [options, setOptions] = useState(mockOptions);

    const changeSelectedOption = (newSelectedId: number) => {
        const newOptions = options.map(option => ({...option, isSelected: newSelectedId === option.id}));

        mockOptions = newOptions;
        setOptions(newOptions);

        sortFilms(newOptions.find(newOption => newOption.isSelected)?.name as SortOptions || SortOptions.RATING);
    };

    return (
        <div className="sorting-bar">
            <SortingByGenre genres={genres} setGenres={changeSelectedGenre}/>
            <Filter options={options} setOptions={changeSelectedOption}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        sortFilms: (sortField: SortOptions) => dispatch(sortFilms(sortField)),
        filterFilms: (genreName: string) => dispatch(filterFilms(genreName))
    };
};

export default connect(null, mapDispatchToProps)(SortingFilms);
