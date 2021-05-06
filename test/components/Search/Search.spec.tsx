import React from 'react';
import { render } from '@testing-library/react';
import Search from '../../../src/components/Search/Search';
import userEvent from '@testing-library/user-event/dist';

describe('NoMatch', () => {
    test('renders NoMatch snapshot', () => {
        const mockSearchQuery = 'mockSearchQuery';
        const mockSetSearchQuery = jest.fn();
        
        const { asFragment, getByPlaceholderText } = render(<Search searchQuery={mockSearchQuery} setSearchQuery={mockSetSearchQuery}/>);

        userEvent.type(getByPlaceholderText('What do you want to watch?'), mockSearchQuery);
        
        expect(asFragment()).toMatchSnapshot();
    });
});
