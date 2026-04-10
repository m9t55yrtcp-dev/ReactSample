import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  const { t } = useTranslation()
  const handleToggle = useCallback(() => onToggle(todo.id), [todo.id, onToggle])
  const handleDelete = useCallback(() => onDelete(todo.id), [todo.id, onDelete])

  return (
    <li className={`flex items-center gap-2.5 bg-gray-50 border border-gray-100 px-3.5 py-3 rounded-lg transition hover:bg-gray-100 sm:px-4 ${todo.done ? 'opacity-55' : ''}`}>
      <Checkbox
        checked={todo.done}
        onChange={handleToggle}
        className="w-[18px] h-[18px] shrink-0 cursor-pointer accent-blue-500"
      />
      <span className={`flex-1 min-w-0 text-[0.9375rem] break-words ${todo.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {todo.text}
      </span>
      <Button
        onClick={handleDelete}
        className="shrink-0 px-2.5 py-1 text-red-500 border border-red-500 rounded-md text-xs cursor-pointer transition hover:bg-red-500 hover:text-white"
      >
        {t('delete')}
      </Button>
    </li>
  )
})

export default TodoItem
