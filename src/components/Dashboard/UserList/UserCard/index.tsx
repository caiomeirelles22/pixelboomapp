'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { User } from '@/lib/types/User'
import { EllipsisVertical } from 'lucide-react'
import { useState } from 'react'

export function UserCard({
  user,
  onDelete,
  onEdit,
}: {
  user: User
  onDelete: (user: User) => void
  onEdit: () => void
}) {
  const [open, setOpen] = useState(false)

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
  }

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      onDelete(user)
      setOpen(false)
    }
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-md border">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-muted-foreground">
            {user.age} anos, {user.gender} · {user.date} · {user.time} · Usuário
            padrão
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge
          className={user.status === 'active' ? 'font-bold' : 'font-semibold'}
          variant={user.status === 'active' ? 'secondary' : 'outline'}
        >
          {user.status === 'active' ? 'Ativo' : 'Inativo'}
        </Badge>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button>
              <EllipsisVertical size={16} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-fit flex flex-col gap-2 px-6">
            <Button variant="secondary" onClick={onEdit}>
              Editar
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Excluir
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
