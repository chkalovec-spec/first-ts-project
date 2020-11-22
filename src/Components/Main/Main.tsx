import React, { useEffect, useState } from 'react'
import { fetchDogImage } from '../../api'

const Main: React.FC = () => {
  const [image, setImage] = useState<string>('')
  const [isLoadingDogImage, setIsLoadingDogImage] = useState<boolean>(false)

  useEffect(() => {
    loadDogImage()
  }, [])

  const loadDogImage = async () => {
    setIsLoadingDogImage(true)
    setImage(await fetchDogImage())
    setIsLoadingDogImage(false)
  }

  const changeImage = () => {
    loadDogImage()
  }

  return (
    <>
      <div className='d-flex mt-3'>
        <button type='button' className='btn btn-outline-success mx-auto' onClick={changeImage}>
          Гав
        </button>
      </div>
      {isLoadingDogImage ? (
        <div className='d-flex mt-3'>
          <div className='spinner-border text-success mx-auto' role='status'></div>
        </div>
      ) : (
        <img src={image} className='rounded mx-auto d-block mt-3 dog' alt='' />
      )}
    </>
  )
}

export default Main
