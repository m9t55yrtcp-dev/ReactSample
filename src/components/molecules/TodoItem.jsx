import { memo, useCallback } from 'react'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = useCallback(() => onToggle(todo.id), [todo.id, onToggle])
  const handleDelete = useCallback(() => onDelete(todo.id), [todo.id, onDelete])

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <Checkbox checked={todo.done} onChange={handleToggle} className="todo-checkbox" />
      <span className="todo-text">{todo.text}</span>
      <Button onClick={handleDelete} className="delete-button">削除</Button>
    </li>
  )
})

export default TodoItem
