import { useCallback, useState } from 'react'
import MainTemplate from '../components/templates/MainTemplate'
import TodoList from '../components/organisms/TodoList'

function TodoPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', done: false },
    { id: 2, text: 'コンポーネントを作る', done: false },
    { id: 3, text: 'アプリを完成させる', done: false },
  ])

  const addTodo = useCallback((text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  return (
    <MainTemplate title="Todoリスト">
      <TodoList todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
    </MainTemplate>
  )
}

export default TodoPage
