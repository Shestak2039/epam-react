import React from 'react';

import './fill-form-input.scss';

export interface FillFormInputProps {
    value: string;
    placeholder: string;
    type: 'text' | 'date';
    title: string;
    onChange: (newValue: string) => void;
}

const FillFormInput: React.FunctionComponent<FillFormInputProps> = ({value, placeholder, title, onChange, type}) => (
    <>
        <h3 className="label">{title}</h3>
        <input className="input" type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)}/>
    </>
);

export default FillFormInput;
