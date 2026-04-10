import '../src/index.css'
import '../src/App.css'
import i18n from '../src/i18n'

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: '言語切り替え',
    defaultValue: 'ja',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ja', title: '日本語' },
        { value: 'en', title: 'English' },
      ],
      showName: true,
    },
  },
}

const withI18n = (Story, context) => {
  i18n.changeLanguage(context.globals.locale ?? 'ja')
  return <Story />
}

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [withI18n],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
