import React, { useEffect, useState } from 'react'
import { fetchRandomMovie } from '../../api'
import { MovieData } from '../../Types/Movie'

export const MovieContainer: any = () => {
  const [movieData, setMovieData] = useState<MovieData>(null)
  const [isLoadingMovieData, setIsLoadingMovieData] = useState<boolean>(false)

  useEffect(() => {
    loadMovieData()
  }, [])

  const loadMovieData = async () => {
    setIsLoadingMovieData(true)
    setMovieData(await fetchRandomMovie())
    setIsLoadingMovieData(false)
  }

  return (
    <>
      {isLoadingMovieData ? (
        <div className='d-flex mt-3'>
          <div className='spinner-border text-success mx-auto' role='status'></div>
        </div>
      ) : (
        <div className='card mb-3'>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img src={`${movieData?.poster}`} className='card-img poster-movie' alt='' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{`${movieData?.title} (${movieData?.date})`}</h5>
                <p className='card-text'>{`${movieData?.overview}`}</p>
                <p className='card-text'>
                  <a
                    href={`https://www.themoviedb.org/movie/${movieData?.id}`}
                    className='btn btn-primary mr-2'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Перейти к просмотру
                  </a>
                  <button type='button' className='btn btn-secondary' onClick={loadMovieData}>
                    Го некст
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
