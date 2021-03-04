import React from 'react';

import './wrapper.scss';

const Wrapper: React.FunctionComponent = ({children}) => (
    <div className="background">
        <div className="wrapper">
            {children}
        </div>
    </div>
);

export default Wrapper;
