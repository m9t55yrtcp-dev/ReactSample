import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

const styles = {
  item: [
    'flex items-center gap-2.5',
    'bg-gray-50 border border-gray-100',
    'px-3.5 py-3 rounded-lg',
    'transition hover:bg-gray-100',
    'sm:px-4',
  ].join(' '),
  text: 'flex-1 min-w-0 text-md break-words',
}

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  const { t } = useTranslation()
  const handleToggle = useCallback(() => onToggle(todo.id), [todo.id, onToggle])
  const handleDelete = useCallback(() => onDelete(todo.id), [todo.id, onDelete])

  return (
    <li className={clsx(styles.item, todo.done && 'opacity-55')}>
      <Checkbox checked={todo.done} onChange={handleToggle} />
      <span className={clsx(styles.text, todo.done ? 'line-through text-gray-400' : 'text-gray-700')}>
        {todo.text}
      </span>
      <Button onClick={handleDelete} variant="danger">
        {t('delete')}
      </Button>
    </li>
  )
})

export default TodoItem
