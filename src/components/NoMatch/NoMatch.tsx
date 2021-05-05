import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import './no-match.scss';
import Button from '../common/Button/Button';

const NoMatch: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div className="no-match">
            <h2>
                No match for <code>{location.pathname}</code>
            </h2>
            <Link to="/" className="no-match-link">
                <Button title={'GO BACK TO HOME'} primary={true} />
            </Link>
        </div>
    );
};

export default NoMatch;
