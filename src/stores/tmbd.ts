import {observable, runInAction, action, makeAutoObservable} from 'mobx';
import {MovieDetails, MovieResponse} from '../types/types';
import {BASE_URL} from '../constants/config';
import {getOptions} from '../utils/helpers';

export class TmbdStore {
  movies: MovieResponse | null = null;
  accessToken: string = '';
  defaultPageContent: number = 10;
  movie: MovieDetails | null = null;
  constructor() {
    makeAutoObservable(this, {
      movies: observable,
      setAccessToken: action,
      searchMovies: action,
      fetchRandomMovies: action,
      setDefaultPageContent: action,
    });
  }

  setAccessToken = (token: string): void => {
    runInAction(() => {
      this.accessToken = token;
    });
  };
  setDefaultPageContent = (perPage: number): void => {
    this.defaultPageContent = perPage;
  };

  fetchRandomMovies = async (): Promise<MovieResponse | void> => {
    try {
      // per_page is not a valid query param, we can slice the return array to get 10 items initially
      const url = `${BASE_URL}/trending/movie/day?per_page=${this.defaultPageContent}&language=en-US`;
      const options = getOptions(this.accessToken, 'GET');
      fetch(url, options)
        .then(res => {
          return res.json();
        })
        .then(data =>
          runInAction(() => {
            this.movies = data;
            return data;
          }),
        );
    } catch (error) {
      throw error;
    }
  };
  searchMovies = async (query: string): Promise<MovieResponse | void> => {
    try {
      const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const options = getOptions(this.accessToken, 'GET');
      fetch(url, options)
        .then(res => {
          return res.json();
        })
        .then(data =>
          runInAction(() => {
            this.movies = data;
            return data;
          }),
        );
    } catch (error) {
      throw error;
    }
  };
  retreiveMovieDetails = async (
    movie_id: number,
  ): Promise<MovieDetails | void> => {
    try {
      if (!movie_id) throw 'Missing ID';
      const url = `${BASE_URL}/movie/${movie_id}?language=en-US`;
      const options = getOptions(this.accessToken, 'GET');
      fetch(url, options)
        .then(res => {
          return res.json();
        })
        .then(data => {
          runInAction(() => {
            this.movie = data;
            return data;
          });
        });
    } catch (error) {
      throw error;
    }
  };
}

export const tmbdStore = new TmbdStore();
