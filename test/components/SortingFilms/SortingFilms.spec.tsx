import React from 'react';
import { render } from '@testing-library/react';
import SortingFilms from '../../../src/components/SortingFilms/SortingFilms';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';
import userEvent from '@testing-library/user-event/dist';


describe('SortingFilms', () => {
    test('renders SortingFilms snapshot', () => {
        const { asFragment, getByTestId, getByRole } = render(<Provider store={store}><SortingFilms /></Provider>);
        
        userEvent.click(getByTestId(1));
        userEvent.selectOptions(getByRole('listbox'), ['1']);
        
        expect(asFragment()).toMatchSnapshot();
    });
});
