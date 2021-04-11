export interface FilmCardModel {
    id?: string;
    title: string;
    genres: string[];
    year: string;
    imageUrl: string;
    rating: number;
    durationInMinutes: number;
    overview: string;
}
