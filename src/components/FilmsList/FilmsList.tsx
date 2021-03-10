import React, { useState } from 'react';

import './films-list.scss';
import FilmCard from './FilmCard/FilmCard';

const mockFilms = [
    {id: 1, title: 'Pulp Fiction', genres: ['Action & Adventure'], year: 2004, imageUrl: 'https://upload.wikimedia.org/wikipedia/uk/8/82/Pulp_Fiction_cover.jpg'},
    {id: 2, title: 'Bohemian Rhapsody', genres: ['Drama', 'Biograpghy', 'Music'], year: 2003, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswmJhZ8WutUOvMZ28826FpwV9l76B9SwrpQ&usqp=CAU'},
    {id: 3, title: 'Kill Bill: Vol 2', genres: ['Oscar winning Movie'], year: 1994, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCPWIYGyoizjT5js1Kcj3XC1FIueDzG2mWw&usqp=CAU'},
    {id: 4, title: 'Avengers: War of Infinity', genres: ['Action & Adventure'], year: 2004, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg'}
]

const FilmsList: React.FunctionComponent = () => {
    const [films] = useState(mockFilms);

    return (
        <div className="films-wrapper">
            <div className="count-movies">{films.length} movies found</div>
            <div className="films">
                {films.map(film => <FilmCard key={film.id} film={film}/>)}
            </div>
        </div>
    )
};

export default FilmsList;
