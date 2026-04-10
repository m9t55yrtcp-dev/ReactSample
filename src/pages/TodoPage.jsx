import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MainTemplate from '../components/templates/MainTemplate'
import TodoList from '../components/organisms/TodoList'

function TodoPage() {
  const { t } = useTranslation()
  const [todos, setTodos] = useState(() => [
    { id: 1, text: t('initialTodos.learn'), done: false },
    { id: 2, text: t('initialTodos.component'), done: false },
    { id: 3, text: t('initialTodos.finish'), done: false },
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
    <MainTemplate title={t('title')}>
      <TodoList todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
    </MainTemplate>
  )
}

export default TodoPage
