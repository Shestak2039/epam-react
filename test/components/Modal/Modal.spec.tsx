import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../../src/components/common/Modal/Modal';


describe('Modal', () => {
    test('renders Modal snapshot', () => {
        const mockCloseModal = jest.fn();
        
        const { asFragment } = render(<Modal onClose={mockCloseModal}/>);

        expect(asFragment()).toMatchSnapshot();
    });
});
