import TodoItem from './TodoItem'

export default {
  title: 'Molecules/TodoItem',
  component: TodoItem,
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Story />
      </ul>
    ),
  ],
}

export const Undone = {
  args: {
    todo: { id: 1, text: 'Reactを学ぶ', done: false },
  },
}

export const Done = {
  args: {
    todo: { id: 2, text: 'コンポーネントを作る', done: true },
  },
}
