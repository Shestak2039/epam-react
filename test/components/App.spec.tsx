import React from 'react';
import { render } from '@testing-library/react';

import App from '../../src/App';
import { Provider } from 'react-redux';
import store from '../../src/store/store';


describe('App', () => {
    test('renders App snapshot', () => {
        const { asFragment } = render(<Provider store={store}><App /></Provider>);

        expect(asFragment()).toMatchSnapshot();
    });
});
