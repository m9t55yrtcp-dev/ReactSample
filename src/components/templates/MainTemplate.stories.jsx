import MainTemplate from './MainTemplate'

export default {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  args: {
    title: 'Todoリスト',
  },
}

export const Default = {
  args: {
    children: <p style={{ color: '#888' }}>ここにコンテンツが入ります</p>,
  },
}
