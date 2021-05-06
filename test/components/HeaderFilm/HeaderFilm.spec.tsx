import React from 'react';
import { render } from '@testing-library/react';

import HeaderFilm from '../../../src/components/Header/HeaderFilm/HeaderFilm';
import { BrowserRouter } from 'react-router-dom';

describe('HeaderFilm', () => {
    test('renders HeaderFilm snapshot', () => {
        const { asFragment } = render(<BrowserRouter><HeaderFilm films={[]}/></BrowserRouter>);

        expect(asFragment()).toMatchSnapshot();
    });
});
