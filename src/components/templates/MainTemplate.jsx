import { memo } from 'react'

const MainTemplate = memo(function MainTemplate({ title, children }) {
  return (
    <div className="app">
      <h1>{title}</h1>
      {children}
    </div>
  )
})

export default MainTemplate
