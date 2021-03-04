import React from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import SortingFilms from './components/SortingFilms/SortingFilms';

const App: React.FunctionComponent = () => (
    <Wrapper>
        <Header />
        <Main>
            <SortingFilms />
        </Main>
    </Wrapper>
);

export default App;
