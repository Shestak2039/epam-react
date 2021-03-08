import React from 'react';

import './film-form.scss';

import { GenreModel } from '../SortingFilms/SortingByGenre/SortingByGenre';

import Button from '../common/Button/Button';
import FillFormInput from './FillFormInput/FillFormInput';
import FillFormSelect from './FillFormSelect/FillFormSelect';

const mockGenres: GenreModel[] = [
    {id: 1, name: 'ALL', isSelected: true},
    {id: 2, name: 'DOCUMENTARY', isSelected: false},
    {id: 3, name: 'COMEDY', isSelected: false},
    {id: 4, name: 'HORROR', isSelected: false},
    {id: 5, name: 'CRIME', isSelected: false}
];

const FilmForm: React.FunctionComponent = () => {
    const [title, setTitle] = React.useState('');
    const handleTitleChange = ((newValue: string) => {
        setTitle(newValue);
    });

    const [date, setDate] = React.useState('');
    const handleDateChange = ((newValue: string) => {
        setDate(newValue);
    });

    const [movieURL, setMovieURL] = React.useState('');
    const handleMovieURLChange = ((newValue: string) => {
        setMovieURL(newValue);
    });

    const [overview, setOverview] = React.useState('');
    const handleOverviewChange = ((newValue: string) => {
        setOverview(newValue);
    });

    const [runtime, setRuntime] = React.useState('');
    const handleRuntimeChange = ((newValue: string) => {
        setRuntime(newValue);
    });

    const [genres, setGenres] = React.useState(mockGenres);
    const handleGenreChange = (newSelectedId: number) => {
        setGenres(genres.map(genre => ({...genre, isSelected: newSelectedId === genre.id})));
    };


    return (
        <div className="film-form">
            <h2 className="header-title">ADD MOVIE</h2>
            <form className="form">
                <div className="form-element">
                    <FillFormInput type={'text'} value={title} placeholder={'Select Title'} title={'TITLE'} onChange={handleTitleChange}/>
                </div>
                <div className="form-element">
                    <FillFormInput type={'date'} value={date} placeholder={'Select Date'} title={'RELEASE DATE'} onChange={handleDateChange}/>
                </div>
                <div className="form-element">
                    <FillFormInput type={'text'} value={movieURL} placeholder={'Movie URL here'} title={'MOVIE URL'} onChange={handleMovieURLChange}/>
                </div>
                <div className="form-element">
                    <FillFormSelect  title={'GENRE'} options={genres} setOptions={handleGenreChange}/>
                </div>
                <div className="form-element">
                    <FillFormInput type={'text'} value={overview} placeholder={'Overview here'} title={'OVERVIEW'} onChange={handleOverviewChange}/>
                </div>
                <div className="form-element">
                    <FillFormInput type={'text'} value={runtime} placeholder={'Runtime here'} title={'RUNTIME'} onChange={handleRuntimeChange}/>
                </div>

                <div className="buttons-area">
                    <Button title={'RESET'} primary={false} />
                    <Button title={'SUBMIT'} primary={true} />
                </div>
            </form>
        </div>
    );
};

export default FilmForm;
