import React from 'react'
import { Button } from '../ui/button'

interface ButtonItemsProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  icon: React.ReactNode
  title: string
  isActive: boolean
}

export function ButtonItems({
  icon,
  title,
  isActive,
  ...props
}: ButtonItemsProps) {
  return (
    <Button
      asChild
      className={`w-full justify-start rounded-full cursor-pointer ${
        isActive
          ? 'bg-[#102822] text-white'
          : 'bg-transparent text-muted-foreground hover:bg-gray-200 cursor-not-allowed'
      } ${props.className ?? ''}`}
      {...props}
    >
      <div>
        {icon}
        <span>{title}</span>
      </div>
    </Button>
  )
}
