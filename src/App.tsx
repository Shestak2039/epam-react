import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

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
import NoMatch from './components/NoMatch/NoMatch';
import NoFilmsFound from './components/NoFilmsFound/NoFilmsFound';

interface AppProps {
    filmsProp: FilmCardModel[];
}

const App: React.FunctionComponent<AppProps> = ({filmsProp}) => {
    const [films, setFilms] = React.useState(filmsProp);
    const [page, setPage] = React.useState<FilmCardModel | undefined>(undefined);

    return (
        <Router>
            <ErrorBoundary>
                <Wrapper>
                    <Switch>
                        <Route path="/home">
                            <Header>
                                <HeaderSearch />
                            </Header>
                            <Main>
                                <SortingFilms/>
                                <FilmsList films={filmsProp}/>
                            </Main>
                            <Footer/>
                        </Route>
                        <Route path="/film/:filmId">
                            <Header>
                                <HeaderFilm films={filmsProp}/>
                            </Header>
                            <Main>
                                <SortingFilms/>
                                <FilmsList films={filmsProp}/>
                            </Main>
                            <Footer/>
                        </Route>
                        <Route path="/not-found">
                            <Header>
                                <HeaderSearch />
                            </Header>
                            <Main>
                                <SortingFilms/>
                                <NoFilmsFound />
                            </Main>
                            <Footer/>
                        </Route>
                        <Route path="/search/:searchQuery">
                            <Header>
                                <HeaderSearch />
                            </Header>
                            <Main>
                                <SortingFilms/>
                                <FilmsList films={filmsProp}/>
                            </Main>
                            <Footer/>
                        </Route>
                        <Redirect exact from="/" to="/home" />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </Wrapper>
            </ErrorBoundary>
        </Router>
    );
};

const mapStateToProps = (state: any) => {
    const {filmsState} = state;

    return {filmsProp: filmsState.filmsToDisplay};
};

export default connect(mapStateToProps)(App);
