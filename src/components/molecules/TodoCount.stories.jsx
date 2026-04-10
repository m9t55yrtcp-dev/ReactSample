import TodoCount from './TodoCount'

export default {
  title: 'Molecules/TodoCount',
  component: TodoCount,
}

export const Default = {
  args: {
    remaining: 2,
    total: 3,
  },
}

export const AllDone = {
  args: {
    remaining: 0,
    total: 3,
  },
}

export const Empty = {
  args: {
    remaining: 0,
    total: 0,
  },
}
