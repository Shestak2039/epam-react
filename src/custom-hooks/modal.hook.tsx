import {useState} from 'react';

export function useModal(): [boolean, () => void] {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return [showModal, toggleModal];
}
