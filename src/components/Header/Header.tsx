import React from 'react';

import './header.scss';

const Header: React.FunctionComponent = ({children}) => (
    <header className="header">
        {children}
    </header>
);

export default Header;
