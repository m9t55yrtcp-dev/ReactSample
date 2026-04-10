import { memo } from 'react'
import TodoInputForm from '../molecules/TodoInputForm'
import TodoCount from '../molecules/TodoCount'
import TodoItem from '../molecules/TodoItem'

const TodoList = memo(function TodoList({ todos, onAdd, onToggle, onDelete }) {
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="todo-list">
      <TodoInputForm onAdd={onAdd} />
      <TodoCount remaining={remaining} total={todos.length} />
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
})

export default TodoList
