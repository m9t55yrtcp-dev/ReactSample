import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setInputValue('')
  }

  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいタスクを入力..."
          className="todo-input"
        />
        <button type="submit" className="add-button">追加</button>
      </form>

      <p className="todo-count">残り {remaining} / {todos.length} タスク</p>

      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
