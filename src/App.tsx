import React from 'react'
import { Route, Switch } from 'react-router'

import Main from './Components/Main/Main'
import { Nav } from './Components/Nav/Nav'
import { TodosContainer } from './Components/Todos/TodosContainer'
import { MovieContainer } from './Components/Movie/MovieContainer'
import './index.css'

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/todos'>
          <TodosContainer />
        </Route>
        <Route path='/movie'>
          <MovieContainer />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </>
  )
}

export default App
