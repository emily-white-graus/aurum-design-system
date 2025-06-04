import React from 'react'
import { Badge } from './Badge'
import { ChevronDown } from 'lucide-react'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export const Default = () => <Badge>Default</Badge>
export const Error = () => <Badge variant="error">Error</Badge>
export const Success = () => <Badge variant="success">Success</Badge>
export const Warning = () => <Badge variant="warning">Warning</Badge>
export const Disabled = () => <Badge variant="disabled">Disabled</Badge>
export const WithIcon = () => (
  <Badge variant="default" icon={<ChevronDown size={14} />}>
    Icon Badge
  </Badge>
)
export const IconOnly = () => (
  <Badge variant="default" icon={<ChevronDown size={14} />} iconOnly />
)
