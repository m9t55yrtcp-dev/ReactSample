import { useState } from 'react'
import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    placeholder: '新しいタスクを入力...',
  },
}

function ControlledInput(args) {
  const [value, setValue] = useState(args.value ?? '')
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Default = {
  render: (args) => <ControlledInput {...args} />,
}

export const WithValue = {
  render: (args) => <ControlledInput {...args} value="サンプルテキスト" />,
}
