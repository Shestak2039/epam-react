import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DeleteFilmModal from '../../../src/components/DeleteFilmForm/DeleteFilmModal';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';
import userEvent from '@testing-library/user-event/dist';


describe('DeleteFilmModal', () => {
    test('renders DeleteFilmModal snapshot', async () => {
        const closeModal = jest.fn();
        const deleteFilm = jest.fn();
        // @ts-ignore
        const { asFragment, getByTestId } = render(<Provider store={store}><DeleteFilmModal filmId={'1'} closeModal={closeModal} deleteFilm={deleteFilm}/></Provider>);

        userEvent.click(getByTestId('CONFIRM'));

        expect(asFragment()).toMatchSnapshot();
        
        waitFor(() => {
            expect(closeModal).toHaveBeenCalled();
            expect(deleteFilm).toHaveBeenCalled();
        })
    });
});
