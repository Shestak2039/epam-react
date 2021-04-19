import React from 'react';

import './fill-form-select.scss';

import { SortOptionModel } from '../../SortingFilms/SortingByDate/Filter';
import { useField } from 'formik';

export interface FillFormSelectProps {
    title: string;
    options: SortOptionModel[];
    setOptions: (selectedId: number) => void;
}

const FillFormSelect: React.FunctionComponent<any> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-element">
            <label htmlFor={props.id || props.name} className={'label'}>{label}</label>
            <select {...field} {...props} className={'select'}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FillFormSelect;
