import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  const { t } = useTranslation()
  const handleToggle = useCallback(() => onToggle(todo.id), [todo.id, onToggle])
  const handleDelete = useCallback(() => onDelete(todo.id), [todo.id, onDelete])

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <Checkbox checked={todo.done} onChange={handleToggle} className="todo-checkbox" />
      <span className="todo-text">{todo.text}</span>
      <Button onClick={handleDelete} className="delete-button">{t('delete')}</Button>
    </li>
  )
})

export default TodoItem
