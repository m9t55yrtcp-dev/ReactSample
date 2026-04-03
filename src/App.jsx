import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', done: false },
    { id: 2, text: 'コンポーネントを作る', done: false },
    { id: 3, text: 'アプリを完成させる', done: false },
  ])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <h1>Todoリスト</h1>
      <TodoList todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
