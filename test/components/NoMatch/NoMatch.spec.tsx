import React from 'react';
import { render } from '@testing-library/react';
import NoMatch from '../../../src/components/NoMatch/NoMatch';
import { BrowserRouter } from 'react-router-dom';


describe('NoMatch', () => {
    test('renders NoMatch snapshot', () => {
        const { asFragment } = render(<BrowserRouter><NoMatch /></BrowserRouter>);

        expect(asFragment()).toMatchSnapshot();
    });
});
