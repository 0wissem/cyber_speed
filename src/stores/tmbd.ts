import {observable, runInAction, action, makeAutoObservable} from 'mobx';
interface IGenre {
  id: number;
  name: string;
}
interface IMovie {
  overview: string | undefined;
  poster_path: string | undefined;
  genres: Array<IGenre>;
  title: string;
  vote_average: number;
}
export class TmbdStore {
  movies = [];
  accessToken = '';
  defaultPageContent = 10;
  movie: IMovie | null = null;
  constructor() {
    makeAutoObservable(this, {
      movies: observable,
      setAccessToken: action,
      reset: action,
      searchMovies: action,
      fetchRandomMovies: action,
      setDefaultPageContent: action,
    });
  }

  setAccessToken = (token: string) => {
    runInAction(() => {
      this.accessToken = token;
    });
  };
  setDefaultPageContent = (perPage: number) => {
    this.defaultPageContent = perPage;
  };

  fetchRandomMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?per_page=${this.defaultPageContent}&language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    };

    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(data =>
        runInAction(() => {
          // get the first 10 movies since per_page query is not available in the API.
          this.movies = data?.results?.slice(0, 10);
          // can be used to handle states instead of using "movies" observable.
          // also helpfull for pagination to keep tracking the page number.
          return data;
        }),
      );
  };
  searchMovies = async (query: string | undefined) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    };

    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(data =>
        runInAction(() => {
          this.movies = data?.results;
          // can be used to handle states instead of using "movies" observable.
          // also helpfull for pagination to keep tracking the page number.
          return data;
        }),
      );
  };
  retreiveMovieDetails = async (movie_id: number) => {
    try {
      if (!movie_id) throw 'Missing ID';
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      };
      fetch(url, options)
        .then(res => {
          return res.json();
        })
        .then(data => {
          runInAction(() => {
            this.movie = data;
            // can be used to handle state instead of using "movie" observable.
            return data;
          });
        });
    } catch (error) {}
  };

  reset = () => {
    this.movies = [];
    this.movie = null;
    this.accessToken = ' ';
  };
}

export const tmbdStore = new TmbdStore();
