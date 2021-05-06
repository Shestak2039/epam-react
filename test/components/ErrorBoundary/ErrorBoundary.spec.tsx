import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../../../src/components/common/ErrorBoundary/ErrorBoundary';
import NoFilmsFound from '../../../src/components/NoFilmsFound/NoFilmsFound';


describe('ErrorBoundary', () => {
    test('renders ErrorBoundary snapshot', () => {
        const { asFragment } = render(<ErrorBoundary><NoFilmsFound /></ErrorBoundary>);

        expect(asFragment()).toMatchSnapshot();
    });
});
