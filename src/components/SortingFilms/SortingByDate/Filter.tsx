import React from 'react';

import './filter.scss';

export interface SortOptionModel {
    name: string;
    isSelected: boolean;
    id: number;
}

export interface FilterProps {
    options: SortOptionModel[];
    setOptions: (selectedId: number) => void;
}

const Filter: React.FunctionComponent<FilterProps> = ({options, setOptions}) => (
    <div className="filter">
        <div className="filter-name">SORT BY</div>
        <select
            defaultValue={options.find(option => option.isSelected)?.id}
            onChange={(event) => setOptions(+event.target.value)}
            className="filter-select"
        >
            {options.map(option => <option className="filter-select-option" key={option.id} value={option.id}>{option.name}</option>)}
        </select>
    </div>
);

export default Filter;
