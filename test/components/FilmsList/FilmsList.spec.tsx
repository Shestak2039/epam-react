import React from 'react';
import { render } from '@testing-library/react';

import FilmsList from '../../../src/components/FilmsList/FilmsList';
import { FilmCardModel } from '../../../src/models/film-card.model';
import { BrowserRouter } from 'react-router-dom';

describe('FilmsList', () => {
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
    
    test('renders FilmsList snapshot', () => {
        const { asFragment } = render(<BrowserRouter><FilmsList films={[testMovie1]}/></BrowserRouter>);

        expect(asFragment()).toMatchSnapshot();
    });
});
