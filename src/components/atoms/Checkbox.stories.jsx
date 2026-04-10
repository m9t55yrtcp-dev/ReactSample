import Checkbox from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    className: 'todo-checkbox',
  },
}

export const Unchecked = {
  args: {
    checked: false,
  },
}

export const Checked = {
  args: {
    checked: true,
  },
}
