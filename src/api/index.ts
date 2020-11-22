import { MovieData } from './../Types/Movie'
import { generateRandomNumber } from './../utils/index'
import Axios from 'axios'

const RANDOM_DOG_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random'

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie/'
const MOVIE_POPULAR = 'popular'
const MOVIE_API_KEY = 'f63141006d75850dfb3075bf547fa7f4'
const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/w780/'
enum MOVIE_LANGUAGE {
  EN = 'en-US',
  RU = 'ru-RU',
}

export const fetchRandomMovie = async () => {
  const randomMovieData: MovieData = {
    title: null,
    overview: null,
    date: null,
    poster: null,
    id: null,
  }

  let totalPages = 0
  let totalResultsOnPage = 0

  await Axios.get(
    `${MOVIE_BASE_URL}${MOVIE_POPULAR}?api_key=${MOVIE_API_KEY}&language=${MOVIE_LANGUAGE.RU}`
  ).then(resp => {
    totalPages = resp.data.total_pages
    totalResultsOnPage = resp.data.results.length
  })

  const randomPage = generateRandomNumber(totalPages)
  const randomMovie = generateRandomNumber(totalResultsOnPage)

  const result = await Axios.get(
    `${MOVIE_BASE_URL}${MOVIE_POPULAR}?api_key=${MOVIE_API_KEY}&language=${MOVIE_LANGUAGE.RU}&page=${randomPage}`
  ).then(resp => resp.data.results[randomMovie])

  randomMovieData.title = result.title
  randomMovieData.overview = result.overview
  randomMovieData.date = result.release_date.slice(0, 4)
  randomMovieData.poster = `${MOVIE_IMAGE_URL}${result.poster_path}`
  randomMovieData.id = result.id

  return randomMovieData
}

export const fetchDogImage = async () => {
  const result = await Axios.get(RANDOM_DOG_IMAGE_URL)
  return result.data.message
}
