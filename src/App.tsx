import React from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import SortingFilms from './components/SortingFilms/SortingFilms';
import FilmsList from './components/FilmsList/FilmsList';

const App: React.FunctionComponent = () => (
    <Wrapper>
        <Header />
        <Main>
            <SortingFilms />
            <FilmsList />
        </Main>
    </Wrapper>
);

export default App;
