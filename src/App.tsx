import React from 'react';

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

const mockFilms = [
    {id: 1, title: 'Avengers: War of Infinity', genres: ['Action & Adventure', 'Thriller'], year: 2004, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg'},
    {id: 2, title: 'Bohemian Rhapsody', genres: ['Drama', 'Documentary', 'Music'], year: 2003, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswmJhZ8WutUOvMZ28826FpwV9l76B9SwrpQ&usqp=CAU'},
    {id: 3, title: 'Kill Bill: Vol 2', genres: ['Thriller'], year: 1994, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCPWIYGyoizjT5js1Kcj3XC1FIueDzG2mWw&usqp=CAU'},
    {id: 4, title: 'Pulp Fiction', genres: ['Action & Adventure', 'Thriller'], year: 2004, imageUrl: 'https://upload.wikimedia.org/wikipedia/uk/8/82/Pulp_Fiction_cover.jpg'},
]

const App: React.FunctionComponent = () => {
    const [films, setFilms] = React.useState(mockFilms);

    const sortFilms = (filter: GenreModel | undefined, sort: SortOptionModel | undefined) => {
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
    };

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header />
                <Main>
                    <SortingFilms sortFilms={sortFilms}/>
                    <FilmsList films={films}/>
                </Main>
                <Footer />
            </Wrapper>
        </ErrorBoundary>
    )
};

export default App;
