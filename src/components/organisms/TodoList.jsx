import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import TodoInputForm from '../molecules/TodoInputForm'
import TodoCount from '../molecules/TodoCount'
import TodoItem from '../molecules/TodoItem'

const styles = {
  card: [
    'bg-white rounded-xl shadow-sm ring-1 ring-black/5',
    'px-4 py-5',
    'sm:px-6 sm:py-7 sm:rounded-2xl',
  ].join(' '),
  list: 'flex flex-col gap-1.5',
}

const TodoList = memo(function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const { t } = useTranslation()
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className={styles.card}>
      <TodoInputForm onAdd={onAdd} />
      <TodoCount remaining={remaining} total={todos.length} />
      {todos.length === 0 ? (
        <p className="py-8 text-center text-sm text-gray-400">{t('empty')}</p>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
})

export default TodoList
