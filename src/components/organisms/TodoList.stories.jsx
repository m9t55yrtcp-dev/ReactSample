import { useState } from 'react'
import TodoList from './TodoList'

export default {
  title: 'Organisms/TodoList',
  component: TodoList,
}

function TodoListWithState({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos)

  const onAdd = (text) => setTodos((prev) => [...prev, { id: Date.now(), text, done: false }])
  const onToggle = (id) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const onDelete = (id) => setTodos((prev) => prev.filter((t) => t.id !== id))

  return <TodoList todos={todos} onAdd={onAdd} onToggle={onToggle} onDelete={onDelete} />
}

export const Default = {
  render: () => (
    <TodoListWithState
      initialTodos={[
        { id: 1, text: 'Reactを学ぶ', done: false },
        { id: 2, text: 'コンポーネントを作る', done: true },
        { id: 3, text: 'アプリを完成させる', done: false },
      ]}
    />
  ),
}

export const Empty = {
  render: () => <TodoListWithState initialTodos={[]} />,
}
