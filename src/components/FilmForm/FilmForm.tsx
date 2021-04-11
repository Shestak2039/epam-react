import React, { Dispatch } from 'react';

import './film-form.scss';

import { GenreModel } from '../SortingFilms/SortingByGenre/SortingByGenre';

import Button from '../common/Button/Button';
import FillFormInput from './FillFormInput/FillFormInput';
import FillFormSelect from './FillFormSelect/FillFormSelect';
import { connect } from 'react-redux';
import { FilmCardModel } from '../../models/film-card.model';
import { createFilmAsync, updateFilmAsync } from '../../store/actions/film-actions';

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
    const [title, setTitle] = React.useState(filmInfo?.title || '');
    const handleTitleChange = ((newValue: string) => {
        setTitle(newValue);
    });

    const [date, setDate] = React.useState(filmInfo?.year || '');
    const handleDateChange = ((newValue: string) => {
        setDate(newValue);
    });

    const [movieURL, setMovieURL] = React.useState(filmInfo?.imageUrl || '');
    const handleMovieURLChange = ((newValue: string) => {
        setMovieURL(newValue);
    });

    const [overview, setOverview] = React.useState(filmInfo?.overview || '');
    const handleOverviewChange = ((newValue: string) => {
        setOverview(newValue);
    });

    const [runtime, setRuntime] = React.useState(filmInfo?.durationInMinutes + '' || '');
    const handleRuntimeChange = ((newValue: string) => {
        setRuntime(newValue);
    });

    const [genres, setGenres] = React.useState(mockGenres);
    const handleGenreChange = (newSelectedId: number) => {
        setGenres(genres.map(genre => ({...genre, isSelected: newSelectedId === genre.id})));
    };

    const [rating, setRating] = React.useState(filmInfo?.rating + '' || '');
    const handleRatingChange = (newRating: string) => {
        setRating(newRating);
    };

    const handleSubmitButton = () => {
        if (isUpdatingForm) {
            updateFilm(filmInfo?.id || '', {
                title,
                genres: genres.filter(genre => genre.isSelected).map(genre => genre.name),
                year: date,
                imageUrl: movieURL,
                rating: +rating,
                durationInMinutes: +runtime,
                overview: overview
            });
        } else {
            createFilm({
                title,
                genres: genres.filter(genre => genre.isSelected).map(genre => genre.name),
                year: date,
                imageUrl: movieURL,
                rating: +rating,
                durationInMinutes: +runtime,
                overview: overview
            });
        }
        closeModal();
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
                <div className="form-element">
                    <FillFormInput type={'text'} value={rating} placeholder={'Rating here'} title={'Rating'} onChange={handleRatingChange}/>
                </div>

                <div className="buttons-area">
                    <Button title={'RESET'} primary={false} />
                    <Button title={'SUBMIT'} primary={true} action={() => handleSubmitButton()}/>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        createFilm: (film: FilmCardModel) => dispatch(createFilmAsync(film)),
        updateFilm: (filmId: string, film: FilmCardModel) => dispatch(updateFilmAsync(filmId, film))
    }
};

export default connect(null, mapDispatchToProps)(FilmForm);
