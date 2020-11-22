import React from 'react'
import { NavLink } from 'react-router-dom'
import { Clock } from '../Clock/Clock'

export const Nav: React.FC = () => {
  return (
    <>
      <nav className='navbar navbar-light bg-dark'>
        <NavLink className='navbar-brand text-light ' to='/'>
          Type Script
        </NavLink>
        <ul className='nav justify-content-end flex-grow-1'>
          <li className='nav-item'>
            <NavLink className='nav-link text-white bg-dark' to='/todos'>
              Список дел
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link text-white bg-dark' to='/movie'>
              Что посмотреть
            </NavLink>
          </li>
        </ul>
        <span className='navbar-text text-success pl-1'>
          <Clock />
        </span>
      </nav>
    </>
  )
}
