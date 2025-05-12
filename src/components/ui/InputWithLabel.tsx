import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InputHTMLAttributes } from 'react'

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function InputWithLabel({
  label,
  id,
  className,
  ...rest
}: InputWithLabelProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        className={`mt-0.5 ${className ?? ''} placeholder:text-muted-foreground`}
        {...rest}
      />
    </div>
  )
}
