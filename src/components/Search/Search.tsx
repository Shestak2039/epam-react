import React from 'react';

import './search.scss';

export interface SearchProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const Search: React.FunctionComponent<SearchProps> = ({searchQuery, setSearchQuery}) => (
    <div className="search">
        <input
            name="search-input"
            id="search-input"
            className="search-input"
            placeholder="What do you want to watch?"
            value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
    </div>
);

export default Search;
