import filmsReducer from '../../src/store/reducers/films-reducer';
import { ActionTypes } from '../../src/store/actions/action-types';
import { FilmCardModel } from '../../src/models/film-card.model';
import { SortOptions } from '../../src/models/sort.model';

describe('films reducer', () => {
    const initialState = {
        films: [],
        filmsToDisplay: [],
        sortOption: SortOptions.RATING,
        selectedGenreName: 'ALL'
    };
    const testMovie1: FilmCardModel = {
        id: 'id',
        title: 'title',
        genres: [],
        year: 'year',
        imageUrl: 'imageUrl',
        rating: 0,
        durationInMinutes: 0,
        overview: 'overview',
    };
    test('should return default state', () => {
        expect(filmsReducer(initialState, {type: null as any})).toEqual(initialState);
    });
    
    test('should handle SET_FILMS action', () => {
       expect(filmsReducer(initialState, {type: ActionTypes.SET_FILMS, payload: [testMovie1]})).toEqual({
           films: [testMovie1],
           filmsToDisplay: [testMovie1],
           sortOption: SortOptions.RATING,
           selectedGenreName: 'ALL'
       });
    });

    test('should handle SORT_FILMS action', () => {
        expect(filmsReducer(initialState, {type: ActionTypes.SORT_FILMS, payload: SortOptions.YEAR})).toEqual({
            films: [],
            filmsToDisplay: [],
            sortOption: SortOptions.YEAR,
            selectedGenreName: 'ALL'
        });
    });

    test('should handle FILTER_FILMS action', () => {
        expect(filmsReducer(initialState, {type: ActionTypes.FILTER_FILMS, payload: 'HORROR'})).toEqual({
            films: [],
            filmsToDisplay: [],
            sortOption: SortOptions.RATING,
            selectedGenreName: 'HORROR'
        });
    });
});
