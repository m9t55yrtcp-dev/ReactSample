import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'ボタン',
  },
}

export const Default = {}

export const Submit = {
  args: {
    children: '追加',
    type: 'submit',
    className: 'add-button',
  },
}

export const Delete = {
  args: {
    children: '削除',
    className: 'delete-button',
  },
}
