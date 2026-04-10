import { memo } from 'react'

const TodoCount = memo(function TodoCount({ remaining, total }) {
  return (
    <p className="todo-count">残り {remaining} / {total} タスク</p>
  )
})

export default TodoCount
