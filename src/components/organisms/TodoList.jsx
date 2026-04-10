import { memo } from 'react'
import TodoInputForm from '../molecules/TodoInputForm'
import TodoCount from '../molecules/TodoCount'
import TodoItem from '../molecules/TodoItem'

const TodoList = memo(function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-black/5 px-4 py-5 sm:px-6 sm:py-7 sm:rounded-2xl">
      <TodoInputForm onAdd={onAdd} />
      <TodoCount remaining={remaining} total={todos.length} />
      <ul className="flex flex-col gap-1.5">
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
})

export default TodoList
