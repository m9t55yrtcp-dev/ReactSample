import MainTemplate from './MainTemplate'

export default {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  parameters: {
    layout: 'fullscreen',
  },
}

function MainTemplateWithState({ title, children }) {
  return <MainTemplate title={title}>{children}</MainTemplate>
}

const content = <p className="text-gray-400 text-sm">ここにコンテンツが入ります</p>

export const SidebarOpen = {
  render: () => <MainTemplateWithState title="Todoリスト">{content}</MainTemplateWithState>,
}

export const Mobile = {
  render: () => <MainTemplateWithState title="Todoリスト">{content}</MainTemplateWithState>,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}

export const Tablet = {
  render: () => <MainTemplateWithState title="Todoリスト">{content}</MainTemplateWithState>,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
