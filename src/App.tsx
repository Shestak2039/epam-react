import React from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import SortingFilms from './components/SortingFilms/SortingFilms';
import FilmsList from './components/FilmsList/FilmsList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

const App: React.FunctionComponent = () => (
    <ErrorBoundary>
        <Wrapper>
            <Header />
            <Main>
                <SortingFilms />
                <FilmsList />
            </Main>
            <Footer />
        </Wrapper>
    </ErrorBoundary>
);

export default App;
