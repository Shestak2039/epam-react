import { ActionTypes } from '../actions/action-types';
import { ActionModel } from '../../models/action.model';
import { SortOptions } from '../../models/sort.model';
import { filterFilmsByGenre, sortFilmsByField } from '../../utils/preparing-films';

const initialState = {
    films: [],
    filmsToDisplay: [],
    sortOption: SortOptions.RATING,
    selectedGenreName: 'ALL'
};

const filmsReducer = (state = initialState, action: ActionModel<any>) => {
    switch (action.type) {
        case ActionTypes.SET_FILMS:
            return {...state, films: action.payload, filmsToDisplay:  filterFilmsByGenre(state.selectedGenreName, sortFilmsByField(state.sortOption, action.payload))};
        case ActionTypes.SORT_FILMS:
            return {...state, sortOption: action.payload, filmsToDisplay: filterFilmsByGenre(state.selectedGenreName, sortFilmsByField(action.payload, state.films))};
        case ActionTypes.FILTER_FILMS:
            return {...state, selectedGenreName: action.payload, filmsToDisplay: filterFilmsByGenre(action.payload, sortFilmsByField(state.sortOption, state.films))};
        default:
            return state;
    }
};

export default filmsReducer;
