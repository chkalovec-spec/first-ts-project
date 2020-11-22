import React, { useEffect, useState } from 'react'

import { TodoItem } from '../../Types/Todos'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const TodosContainer: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [todos, setTodos] = useState<TodoItem[]>([])

  useEffect(() => {
    const savedTodos: TodoItem[] = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(savedTodos)
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: TodoItem = {
      id: +new Date(),
      title: title,
      completed: false,
    }
    if (title) {
      setTodos([...todos, newTodo])
    }
    setTitle('')
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo(title)
    }
  }

  const onClearHandler = () => setTitle('')

  const onAddHandler = () => addTodo(title)

  const onToogleHandler = (id: number) => {
    setTodos(
      todos.map((todo: TodoItem) => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    )
  }

  const onRemoveHandler = (id: number) => {
    const checkDelete = window.confirm('Вы действительно хотите удалить дело?')

    if (checkDelete) {
      setTodos(
        todos.filter((todo: TodoItem) => {
          return todo.id !== id
        })
      )
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-9 pt-3'>
            <TodoInput
              title={title}
              onChangeHandler={onChangeHandler}
              onKeyPressHandler={onKeyPressHandler}
              onClearHandler={onClearHandler}
              onAddHandler={onAddHandler}
            />
            <TodoList
              todos={todos}
              onToogleHandler={onToogleHandler}
              onRemoveHandler={onRemoveHandler}
            />
          </div>
        </div>
      </div>
    </>
  )
}
