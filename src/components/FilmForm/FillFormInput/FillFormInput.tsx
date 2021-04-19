import React from 'react';

import './fill-form-input.scss';
import { useField } from 'formik';

export interface FillFormInputProps {
    id: string;
    value: string | number;
    placeholder: string;
    type: 'text' | 'date' | 'number';
    title: string;
    onChange: (newValue: any) => void;
}

const FillFormInput: React.FunctionComponent<any> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-element">
            <label htmlFor={props.id || props.name} className={'label'}>{label}</label>
            <input className="input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FillFormInput;
