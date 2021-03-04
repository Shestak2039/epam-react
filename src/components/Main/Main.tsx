import React from 'react';

import './main.scss';

const Main: React.FunctionComponent = ({children}) => (
    <main className="main">
        {children}
    </main>
);

export default Main;
