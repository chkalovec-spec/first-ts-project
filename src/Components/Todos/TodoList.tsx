import React from 'react'
import trashIcon from '../../assets/trash.svg'
import { TodoItem } from '../../Types/Todos'

type TodoListProps = {
  todos: TodoItem[]
  onToogleHandler(id: number): void
  onRemoveHandler(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToogleHandler, onRemoveHandler }) => {
  const TodoItem = (todo: TodoItem) => {
    return (
      <li className='list-group-item'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToogleHandler(todo.id)}
        />
        {todo.completed ? <s>{todo.title}</s> : todo.title}
        <span className='float-right' role='button' onClick={() => onRemoveHandler(todo.id)}>
          <img src={trashIcon} alt='' />
        </span>
      </li>
    )
  }
  return (
    <>
      <ul className='list-group list-group-flush'>
        {todos?.map((item: TodoItem) => {
          return <TodoItem {...item} key={item.id} />
        })}
      </ul>
    </>
  )
}
