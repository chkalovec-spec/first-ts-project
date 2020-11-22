import React from 'react'

type TodoInputProps = {
  title: string
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
  onKeyPressHandler(event: React.KeyboardEvent): void
  onAddHandler(): void
  onClearHandler(): void
}

export const TodoInput: React.FC<TodoInputProps> = ({
  title,
  onChangeHandler,
  onKeyPressHandler,
  onClearHandler,
  onAddHandler,
}) => {
  return (
    <>
      <label htmlFor='basic-url'>Введите дело</label>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          id='basic-url'
          aria-describedby='basic-addon3'
          placeholder='Введите название дела'
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <div className='input-group-append' role='button' onClick={onClearHandler}>
          <span className='input-group-text font-weight-bold h1'>&times;</span>
        </div>
      </div>
      <button
        type='button'
        className='btn btn-primary mb-3'
        onClick={onAddHandler}
        disabled={title === ''}
      >
        Добавить
      </button>
    </>
  )
}
