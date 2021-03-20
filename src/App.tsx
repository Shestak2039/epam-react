import React, { useCallback } from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import SortingFilms from './components/SortingFilms/SortingFilms';
import FilmsList from './components/FilmsList/FilmsList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import { GenreModel } from './components/SortingFilms/SortingByGenre/SortingByGenre';
import { SortOptionModel } from './components/SortingFilms/SortingByDate/Filter';
import { FilmCardModel } from './components/FilmsList/FilmCard/FilmCard';
import HeaderSearch from './components/Header/HeaderSearch/HeaderSearch';
import HeaderFilm from './components/Header/HeaderFilm/HeaderFilm';

const mockFilms = [
    {
        id: 1,
        title: 'Avengers: War of Infinity',
        genres: ['Action & Adventure', 'Thriller'],
        year: 2004,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg',
        rating: 4.3,
        durationInMinutes: 153,
        overview: 'Something info about Avengers: War of Infinity'
    },
    {
        id: 2,
        title: 'Bohemian Rhapsody',
        genres: ['Drama', 'Documentary', 'Music'],
        year: 2003,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswmJhZ8WutUOvMZ28826FpwV9l76B9SwrpQ&usqp=CAU',
        rating: 4.1,
        durationInMinutes: 90,
        overview: 'Something info about Bohemian Rhapsody'
    },
    {
        id: 3,
        title: 'Kill Bill: Vol 2',
        genres: ['Thriller'],
        year: 1994,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCPWIYGyoizjT5js1Kcj3XC1FIueDzG2mWw&usqp=CAU',
        rating: 4.2,
        durationInMinutes: 110,
        overview: 'Something info about Kill Bill: Vol 2'
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        genres: ['Action & Adventure', 'Thriller'],
        year: 2004,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/uk/8/82/Pulp_Fiction_cover.jpg',
        rating: 4.5,
        durationInMinutes: 175,
        overview: 'Something info about Pulp Fiction'
    },
];

const App: React.FunctionComponent = () => {
    const [films, setFilms] = React.useState(mockFilms);
    const [page, setPage] = React.useState<FilmCardModel | undefined>(undefined);

    const sortFilms = useCallback((filter: GenreModel | undefined, sort: SortOptionModel | undefined) => {
        let resultFilms: FilmCardModel[]  = JSON.parse(JSON.stringify(mockFilms));

        if (filter && filter.id !== 1) {
            resultFilms= resultFilms.filter(film => film.genres.map(genre => genre.toLowerCase()).includes(filter.name.toLowerCase()));
        }

        if (sort && sort.id === 1) {
            resultFilms = resultFilms.sort((film1, film2) => {
                if (film1.title > film2.title) {
                    return 1;
                } else if (film1.title < film2.title) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else if (sort && sort.id === 2) {
            resultFilms = resultFilms.sort((film1, film2) => {
                if (film1.year > film2.year) {
                    return 1;
                } else if (film1.year < film2.year) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }

        setFilms(resultFilms);
    }, []);

    const openPage = (id: number | undefined) => {
        setPage(films.find(film => film.id === id));
    };

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header>
                    {page ? <HeaderFilm film={page} openPage={openPage}/> : <HeaderSearch />}
                </Header>
                <Main>
                    <SortingFilms sortFilms={sortFilms}/>
                    <FilmsList films={films} openPage={openPage}/>
                </Main>
                <Footer />
            </Wrapper>
        </ErrorBoundary>
    )
};

export default App;
