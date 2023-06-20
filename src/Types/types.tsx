export interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface InputResult {
  searchValue: string;
}
export interface propsPaginate {
  moviesPerPage: number;
  totalMovies: number;
  paginate: Function;
  currentPage: number;
}

export interface MoviesInformation {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}