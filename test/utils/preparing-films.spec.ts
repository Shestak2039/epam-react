import { FilmCardModel } from '../../src/models/film-card.model';
import { sortFilmsByField } from '../../src/utils/preparing-films';
import { SortOptions } from '../../src/models/sort.model';

describe('sort films y field', () => {
    const testMovie1: FilmCardModel = {
        id: 'id2',
        title: 'title',
        genres: [],
        year: '1999-12-12',
        imageUrl: 'imageUrl',
        rating: 1,
        durationInMinutes: 0,
        overview: 'overview',
    };
    const testMovie2: FilmCardModel = {
        id: 'id1',
        title: 'title',
        genres: [],
        year: '1998-12-12',
        imageUrl: 'imageUrl',
        rating: 0,
        durationInMinutes: 0,
        overview: 'overview',
    };
    const testMovie3: FilmCardModel = {
        id: 'id3',
        title: 'title',
        genres: [],
        year: '2001-12-12',
        imageUrl: 'imageUrl',
        rating: 2,
        durationInMinutes: 0,
        overview: 'overview',
    };
    const mockFilms = [testMovie2, testMovie1, testMovie3];
   test('sort by rating', () => {
       const resultFilms = sortFilmsByField(SortOptions.RATING, mockFilms);
       
       expect(resultFilms[0].id).toBe('id1');
       expect(resultFilms[1].id).toBe('id2');
       expect(resultFilms[2].id).toBe('id3');
   });
    test('sort by year', () => {
        const resultFilms = sortFilmsByField(SortOptions.YEAR, mockFilms);

        expect(resultFilms[0].id).toBe('id1');
        expect(resultFilms[1].id).toBe('id2');
        expect(resultFilms[2].id).toBe('id3');
    });
});
