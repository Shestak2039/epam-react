import React, { Dispatch } from 'react';

import './film-form.scss';

import { GenreModel } from '../SortingFilms/SortingByGenre/SortingByGenre';

import Button from '../common/Button/Button';
import FillFormInput from './FillFormInput/FillFormInput';
import FillFormSelect from './FillFormSelect/FillFormSelect';
import { connect } from 'react-redux';
import { FilmCardModel } from '../../models/film-card.model';
import { createFilmAsync, updateFilmAsync } from '../../store/actions/film-actions';
import { Formik, Form, FormikValues } from 'formik';
import * as Yup from 'yup';

const mockGenres: GenreModel[] = [
    {id: 1, name: 'ALL', isSelected: true},
    {id: 2, name: 'DOCUMENTARY', isSelected: false},
    {id: 3, name: 'COMEDY', isSelected: false},
    {id: 4, name: 'HORROR', isSelected: false},
    {id: 5, name: 'CRIME', isSelected: false}
];

interface FilmFormProps {
    createFilm: (film: FilmCardModel) => void;
    updateFilm: (filmId: string, film: FilmCardModel) => void;
    closeModal: () => void;
    filmInfo?: FilmCardModel;
    isUpdatingForm?: boolean;
}

const FilmForm: React.FunctionComponent<FilmFormProps> = ({createFilm, updateFilm, closeModal, filmInfo, isUpdatingForm}) => {
    const handleSubmitButton = (values: FormikValues = {}) => {
        const {title, genres, date, movieURL, rating, runtime, overview} = values;
        if (isUpdatingForm) {
            updateFilm(filmInfo?.id || '', {
                title,
                genres: [genres],
                year: date,
                imageUrl: movieURL,
                rating: rating,
                durationInMinutes: runtime,
                overview: overview
            });
        } else {
            createFilm({
                title,
                genres: [genres],
                year: date,
                imageUrl: movieURL,
                rating: rating,
                durationInMinutes: runtime,
                overview: overview
            });
        }
        closeModal();
    };

    return (
        <Formik
            initialValues={{
                title: filmInfo?.title || '',
                date: filmInfo?.year || '',
                movieURL: filmInfo?.imageUrl || '',
                overview: filmInfo?.overview || '',
                genres: filmInfo?.genres[0] || '',
                runtime: filmInfo?.durationInMinutes || 0,
                rating: filmInfo?.rating || 0
            }}
            validationSchema={Yup.object({
                title: Yup.string().min(2, 'Must be 2 characters or more').required(),
                date: Yup.string().matches(/\d\d\d\d-\d\d-\d\d/, 'Must be a date').required(),
                movieURL: Yup.string().matches(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, 'Must be a link').required(),
                genres: Yup.string().required(),
                overview: Yup.string().required(),
                runtime: Yup.number().required(),
                rating: Yup.number().max(5, 'Max value is 5').min(0).required()
            })}
            onSubmit={(values) => {}}
        >
            {({values, resetForm}) => (
                <Form className="film-form" data-testid="form">
                    <FillFormInput name="title" type="text" placeholder={'Select Title'} label={'TITLE'}/>
                    <FillFormInput name="date" type="date" placeholder={'Select Date'} label={'RELEASE DATE'}/>
                    <FillFormInput name="movieURL" type="text" placeholder={'Movie URL here'} label={'MOVIE URL'}/>
                    <FillFormSelect  label={'GENRE'} name="genres">
                        <option value="">Select a genre</option>
                        <option value="ALL">ALL</option>
                        <option value="DOCUMENTARY">DOCUMENTARY</option>
                        <option value="COMEDY">COMEDY</option>
                        <option value="HORROR">HORROR</option>
                        <option value="CRIME">CRIME</option>
                    </FillFormSelect>
                    <FillFormInput name="overview" type="text" placeholder={'Runtime here'} label={'OVERVIEW'}/>
                    <FillFormInput name="runtime" type="number" placeholder={'Overview here'} label={'RUNTIME'}/>
                    <FillFormInput name="rating" type="number" placeholder={'Rating here'} label={'RATING'}/>
                    <div className="buttons-area">
                        <Button title={'RESET'} primary={false} action={() => resetForm()}/>
                        <Button title={'SUBMIT'} primary={true} type={'submit'} action={() => handleSubmitButton(values)}/>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        createFilm: (film: FilmCardModel) => dispatch(createFilmAsync(film)),
        updateFilm: (filmId: string, film: FilmCardModel) => dispatch(updateFilmAsync(filmId, film))
    };
};

export default connect(null, mapDispatchToProps)(FilmForm);
