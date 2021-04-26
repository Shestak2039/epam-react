import { SortOptions } from '../models/sort.model';
import { FilmCardModel } from '../models/film-card.model';

export function sortFilmsByField(sortField: SortOptions, films: FilmCardModel[]): FilmCardModel[] {
    const copyFilms: FilmCardModel[] = JSON.parse(JSON.stringify(films));
    switch (sortField) {
        case SortOptions.RATING:
            return copyFilms.sort((film1, film2) => {
                if (film1.rating > film2.rating) {
                    return 1;
                } else if (film1.rating < film2.rating) {
                    return -1;
                } else {
                    return 0;
                }
            });
        case SortOptions.YEAR:
            return copyFilms.sort((film1, film2) => {
                const film1Year = film1.year.split('-')[0];
                const film2Year = film2.year.split('-')[0];
                if (film1Year > film2Year) {
                    return 1;
                } else if (film1Year < film2Year) {
                    return -1;
                } else {
                    return 0;
                }
            });
        default:
            return copyFilms;
    }
}

export function filterFilmsByGenre(genreName: string, films: FilmCardModel[]): FilmCardModel[] {
    if (genreName.toLowerCase().includes('all')) {
        return films;
    } else {
        return films.filter(film => film.genres.map(genre => genre.toLowerCase()).includes(genreName.toLowerCase()))
    }
}
