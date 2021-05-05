import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../../src/store/store';
import {
    createFilmAsync, deleteFilmAsync,
    filterFilms,
    loadFilmsAsync,
    setFilms,
    sortFilms, updateFilmAsync
} from '../../src/store/actions/film-actions';
import { FilmCardModel } from '../../src/models/film-card.model';
import { SortOptions } from '../../src/models/sort.model';
import axios from 'axios';

const mockStore = configureMockStore([thunk]);

const initialState = {
    films: [],
    filmsToDisplay: [],
    sortOption: SortOptions.RATING,
    selectedGenreName: 'ALL'
};

describe('films-actions', () => {
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
    
    describe('sync actions', () => {
        test('setFilms', () => {
            store.dispatch(setFilms([testMovie1]));
            
            const data = store.getState().filmsState as any;
            expect(data.films).toEqual([testMovie1]);
        });

        test('sortFilms', () => {
            store.dispatch(sortFilms(SortOptions.YEAR));

            const data = store.getState().filmsState as any;
            expect(data.sortOption).toEqual(SortOptions.YEAR);
        });

        test('filterFilms', () => {
            store.dispatch(filterFilms('HORROR'));

            const data = store.getState().filmsState as any;
            expect(data.selectedGenreName).toEqual('HORROR');
        });
    });
    
    describe('async actions', () => {
        const storeMocked = mockStore(initialState);
        
        test('loadFilmsAsync',async () => {
            axios.get = jest.fn(() => Promise.resolve() as any); 
            
            return (storeMocked as any).dispatch(loadFilmsAsync()).then(() => {
                expect(axios.get).toHaveBeenCalled();
            })
        });
        test('createFilmAsync',async () => {
            axios.post = jest.fn(() => Promise.resolve() as any);

            return (storeMocked as any).dispatch(createFilmAsync({} as any)).then(() => {
                expect(axios.post).toHaveBeenCalled();
            })
        });
        test('updateFilmAsync',async () => {
            axios.put = jest.fn(() => Promise.resolve() as any);

            return (storeMocked as any).dispatch(updateFilmAsync('', {} as any)).then(() => {
                expect(axios.put).toHaveBeenCalled();
            })
        });
        test('deleteFilmAsync',async () => {
            axios.delete = jest.fn(() => Promise.resolve() as any);

            return (storeMocked as any).dispatch(deleteFilmAsync('')).then(() => {
                expect(axios.delete).toHaveBeenCalled();
            })
        });
    });
});
