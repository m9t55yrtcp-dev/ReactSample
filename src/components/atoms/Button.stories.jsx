import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'ボタン',
  },
}

export const Primary = {
  args: {
    children: '追加',
    variant: 'primary',
  },
}

export const Danger = {
  args: {
    children: '削除',
    variant: 'danger',
  },
}

export const Ghost = {
  args: {
    children: '日本語',
    variant: 'ghost',
  },
}

export const GhostActive = {
  args: {
    children: '日本語',
    variant: 'ghost',
    active: true,
  },
}
