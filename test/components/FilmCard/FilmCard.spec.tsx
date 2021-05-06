import React from 'react';
import { render } from '@testing-library/react';
import FilmCard from '../../../src/components/FilmsList/FilmCard/FilmCard';
import { FilmCardModel } from '../../../src/models/film-card.model';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event/dist';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';

describe('FilmCard', () => {
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
    
    test('renders FilmCard snapshot', () => {
        const { asFragment, getByTestId } = render(<Provider store={store}><BrowserRouter><FilmCard film={testMovie1}/></BrowserRouter></Provider>);

        userEvent.click(getByTestId('additional-icon'));
        userEvent.click(getByTestId('edit-button'));
        userEvent.click(getByTestId('delete-button'));
        
        expect(asFragment()).toMatchSnapshot();
    });
});
