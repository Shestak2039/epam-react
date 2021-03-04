import React from 'react';

import './search.scss';

const Search: React.FunctionComponent = () => (
    <div className="search">
        <input name="search-input" id="search-input" className="search-input" placeholder="What do you want to watch?" />
    </div>
);

export default Search;
