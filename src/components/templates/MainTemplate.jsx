import { memo } from 'react'
import LanguageSwitcher from '../molecules/LanguageSwitcher'

const styles = {
  layout: 'flex flex-col min-h-screen bg-gray-100',
  header: [
    'sticky top-0 z-10 bg-white border-b border-gray-200',
    'px-4 py-3 flex items-center justify-between gap-3',
    'sm:px-6 lg:px-8',
  ].join(' '),
  title: [
    'text-xl font-bold text-[#1a1a2e] tracking-tight whitespace-nowrap',
    'sm:text-[1.375rem]',
  ].join(' '),
  main: [
    'flex-1 w-full max-w-2xl mx-auto',
    'px-4 pt-5 pb-10',
    'sm:px-6 sm:pt-8 sm:pb-16',
    'lg:px-0 lg:pt-12 lg:pb-20',
  ].join(' '),
}

const MainTemplate = memo(function MainTemplate({ title, children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <LanguageSwitcher />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
})

export default MainTemplate
