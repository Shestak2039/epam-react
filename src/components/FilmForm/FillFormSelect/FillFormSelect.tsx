import React from 'react';

import './fill-form-select.scss';

import { SortOptionModel } from '../../SortingFilms/SortingByDate/Filter';

export interface FillFormSelectProps {
    title: string;
    options: SortOptionModel[];
    setOptions: (selectedId: number) => void;
}

const FillFormSelect: React.FunctionComponent<FillFormSelectProps> = ({title, options, setOptions}) => {
    return (
        <>
            <h3 className="label">{title}</h3>
            <div className="input-select">
                <select
                    defaultValue={options.find(option => option.isSelected)?.id}
                    onChange={(event) => setOptions(+event.target.value)}
                    className="select"
                >
                    {options.map(option => <option className="select-option" key={option.id} value={option.id}>{option.name}</option>)}
                </select>
            </div>
        </>
    )
};

export default FillFormSelect;
