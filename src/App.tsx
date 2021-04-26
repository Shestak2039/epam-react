import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { FilmCardModel } from './models/film-card.model';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import SortingFilms from './components/SortingFilms/SortingFilms';
import FilmsList from './components/FilmsList/FilmsList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import HeaderSearch from './components/Header/HeaderSearch/HeaderSearch';
import HeaderFilm from './components/Header/HeaderFilm/HeaderFilm';

interface AppProps {
    filmsProp: FilmCardModel[];
}

const App: React.FunctionComponent<AppProps> = ({filmsProp}) => {
    const [films, setFilms] = React.useState(filmsProp);
    const [page, setPage] = React.useState<FilmCardModel | undefined>(undefined);

    const openPage = (id: string | undefined) => {
        setPage(films.find(film => film.id === id));
    };

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header>
                    {page ? <HeaderFilm film={page} openPage={openPage}/> : <HeaderSearch />}
                </Header>
                <Main>
                    <SortingFilms />
                    <FilmsList films={filmsProp} openPage={openPage}/>
                </Main>
                <Footer />
            </Wrapper>
        </ErrorBoundary>
    )
};

const mapStateToProps = (state: any) => {
    const {filmsState} = state;

    return {filmsProp: filmsState.filmsToDisplay};
};

export default connect(mapStateToProps)(App);
