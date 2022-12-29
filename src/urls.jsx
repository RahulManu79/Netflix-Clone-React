import {API_KEY} from './constans/constans'

export const originals =`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const RomanceMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
