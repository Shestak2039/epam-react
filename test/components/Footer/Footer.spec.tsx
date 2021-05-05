import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../../src/components/Footer/Footer';

describe('Footer', () => {
    test('renders Footer snapshot', () => {
        const { asFragment } = render(<Footer />);

        expect(asFragment()).toMatchSnapshot();
    });
});
