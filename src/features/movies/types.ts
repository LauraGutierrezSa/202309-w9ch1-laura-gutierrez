export interface MovieStructure {
  id: number;
  name: string;
  year: number;
  image: string;
  isWatched: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
