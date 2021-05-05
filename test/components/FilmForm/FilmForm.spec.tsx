import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import FilmForm from '../../../src/components/FilmForm/FilmForm';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';

describe('FilmForm', () => {
    const closeModal = jest.fn();
    const createFilm = jest.fn();
    const updateFilm = jest.fn();
    
    const renderFillForm = () => render(
        <Provider store={store}>
            <FilmForm
                closeModal={closeModal}
                isUpdatingForm={false}
                // @ts-ignore
                createFilm={createFilm}
                // @ts-ignore
                updateFilm={updateFilm}
            />
        </Provider>
    );

    test('renders FillForm snapshot', () => {
        const {asFragment} = renderFillForm();

        expect(asFragment()).toMatchSnapshot();
    });
});
