'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { User } from '@/lib/types/User'
import { InputWithLabel } from '@/components/ui/InputWithLabel'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User
  onSave: (updatedUser: User) => void
}

export function EditUserDialog({ open, onOpenChange, user, onSave }: Props) {
  const [formData, setFormData] = useState<User>(user)

  useEffect(() => {
    setFormData(user)
  }, [user])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSave() {
    onSave(formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar informações de {user.name}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <InputWithLabel
            label="Nome"
            id="name"
            name="name"
            type="text"
            placeholder="Digite o nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputWithLabel
            label="Idade"
            id="age"
            name="age"
            type="number"
            placeholder="Digite a idade"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <div className="flex items-center justify-between">
            <Label htmlFor="status">Status</Label>
            <Switch
              id="status"
              checked={formData.status === 'active'}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  status: checked ? 'active' : 'inactive',
                }))
              }
            />
          </div>
        </div>

        <Button className="mt-6 w-full" onClick={handleSave}>
          Salvar
        </Button>
      </DialogContent>
    </Dialog>
  )
}
