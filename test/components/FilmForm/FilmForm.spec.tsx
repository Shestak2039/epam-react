import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilmForm from '../../../src/components/FilmForm/FilmForm';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';

describe('FilmForm', () => {
    const closeModal = jest.fn();
    const createFilm = jest.fn();
    const updateFilm = jest.fn();
    
    const renderFillForm = (isUpdatingForm = false) => render(
        <Provider store={store}>
            <FilmForm
                closeModal={closeModal}
                isUpdatingForm={isUpdatingForm}
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

    test('should change value in input', () => {
        const { getByPlaceholderText } = renderFillForm();
        
        const titleInput = getByPlaceholderText(/Select Title/i);
        const mockTitle = 'mockTitle';
        
        expect(screen.queryByText(mockTitle)).toBeNull();
        userEvent.type(titleInput, mockTitle);
        expect(titleInput.getAttribute('value')).toEqual(mockTitle);
    });

    it('should send use submit handler and createFilm', async () => {
        const { getByTestId } = renderFillForm();
        const mockSubmitFn = jest.fn();

        const form = getByTestId('form');
        form.onsubmit = mockSubmitFn;

        fireEvent.submit(form);
        userEvent.click(getByTestId('SUBMIT'));

        await waitFor(() => {
            expect(mockSubmitFn).toHaveBeenCalled();
            expect(closeModal).toHaveBeenCalled();
        });
    });
    
    it('should send use submit handler and updateFilm', async () => {
        const { getByTestId } = renderFillForm(true);
        const mockSubmitFn = jest.fn();

        const form = getByTestId('form');
        form.onsubmit = mockSubmitFn;

        fireEvent.submit(form);
        userEvent.click(getByTestId('SUBMIT'));

        await waitFor(() => {
            expect(mockSubmitFn).toHaveBeenCalled();
            expect(closeModal).toHaveBeenCalled();
        });
    });
});
