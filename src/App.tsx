import React from 'react'
import { Route } from 'react-router'

import Main from './Components/Main/Main'
import { Nav } from './Components/Nav/Nav'
import { TodosContainer } from './Components/Todos/TodosContainer'
import { MovieContainer } from './Components/Movie/MovieContainer'
import './index.css'

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Route exact path='/' render={() => <Main />} />
      <Route path='/todos' render={() => <TodosContainer />} />
      <Route path='/movie' render={() => <MovieContainer />} />
    </>
  )
}

export default App
