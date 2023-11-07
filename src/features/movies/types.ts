export interface MovieStructure {
  id: number;
  name: string;
  year: number;
  image: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
