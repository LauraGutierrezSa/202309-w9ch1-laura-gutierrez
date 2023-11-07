export interface MovieStructure {
  id: number;
  title: string;
  year: number;
  image: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
