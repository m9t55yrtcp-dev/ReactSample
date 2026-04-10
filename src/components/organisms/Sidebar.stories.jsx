import { useState } from 'react'
import Sidebar from './Sidebar'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
}

function SidebarWithState({ initialOpen }) {
  const [open, setOpen] = useState(initialOpen)
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        open={open}
        onToggle={() => setOpen((prev) => !prev)}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const Expanded = {
  render: () => <SidebarWithState initialOpen={true} />,
}

export const Collapsed = {
  render: () => <SidebarWithState initialOpen={false} />,
}
