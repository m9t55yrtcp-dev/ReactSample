import { memo } from 'react'
import LanguageSwitcher from '../molecules/LanguageSwitcher'

const MainTemplate = memo(function MainTemplate({ title, children }) {
  return (
    <div className="app">
      <LanguageSwitcher />
      <h1>{title}</h1>
      {children}
    </div>
  )
})

export default MainTemplate
