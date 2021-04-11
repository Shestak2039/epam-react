import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './action-types';
import { API_URL, URL_PATHS } from '../../constants/api-config';
import { ActionModel } from '../../models/action.model';
import { FilmCardModel } from '../../models/film-card.model';
import { SortOptions } from '../../models/sort.model';

export function loadFilmsAsync() {
    return async (dispatch: Dispatch<any>) => {
        axios.get(`${API_URL}/${URL_PATHS.MOVIE}`)
            .then((films: AxiosResponse<FilmCardModel[]>) => {
                dispatch(setFilms(films.data));
            });
    };
}

export function createFilmAsync(film: FilmCardModel) {
    return async (dispatch: Dispatch<any>) => {
        axios.post(`${API_URL}/${URL_PATHS.MOVIE}`, film)
            .then(() => {
                dispatch(loadFilmsAsync());
            });
    }
}

export function updateFilmAsync(filmId: string, film: FilmCardModel) {
    return async (dispatch: Dispatch<any>) => {
        axios.put(`${API_URL}/${URL_PATHS.MOVIE}/${filmId}`, film)
            .then(() => {
                dispatch(loadFilmsAsync());
            });
    }
}

export function deleteFilmAsync(filmId: string) {
    return async (dispatch: Dispatch<any>) => {
        axios.delete(`${API_URL}/${URL_PATHS.MOVIE}/${filmId}`).then(() => {
            dispatch(loadFilmsAsync());
        });
    }
}

export function setFilms(films: FilmCardModel[]): ActionModel<FilmCardModel[]> {
    return {
        type: ActionTypes.SET_FILMS,
        payload: films
    };
}

export function sortFilms(sortField: SortOptions): ActionModel<SortOptions> {
    return {
        type: ActionTypes.SORT_FILMS,
        payload: sortField
    }
}

export function filterFilms(genreName: string): ActionModel<string> {
    return {
        type: ActionTypes.FILTER_FILMS,
        payload: genreName
    }
}
