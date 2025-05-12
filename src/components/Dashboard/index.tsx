'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Summary } from './Summary'
import { AddUser } from './AddUser'
import { UserList } from './UserList'

import { ListFilter, Plus, Search, X } from 'lucide-react'
import statsJson from '@/lib/moks/stats.json'
import usersJson from '@/lib/moks/users.json'
import { User } from '@/lib/types/User'

export function Dashboard() {
  const [users, setUsers] = useState<User[]>(usersJson as User[])
  const stats = statsJson

  function addUser(newUser: User) {
    const updatedUsers = [newUser, ...users]
    setUsers(updatedUsers)
  }

  return (
    <div className="flex flex-col gap-5 p-10 w-full">
      <div className="flex justify-between h-[60px]">
        <h1 className="text-2xl font-semibold">Usuários</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg=[#102822] rounded-full">
              <Plus /> Adicionar
            </Button>
          </SheetTrigger>
          <SheetContent className="flex w-full max-w-[560px] p-10">
            <SheetTitle className="flex justify-between items-center">
              <span className="text-2xl">Adicionar usuário</span>
              <SheetClose>
                <X size={16} />
              </SheetClose>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Preencha os campos abaixo para adicionar um novo usuário.
            </SheetDescription>
            <AddUser onAddUser={addUser} />
          </SheetContent>
        </Sheet>
      </div>

      <Summary
        active={stats.active}
        inactive={stats.inactive}
        sessionTime={stats.sessionTime}
        total={stats.total}
      />

      <div className="flex items-center gap-4 h-10">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input type="text" placeholder="Buscar..." className="pl-9" />
        </div>
        <Button variant="outline" size={'icon'} className="rounded-full">
          <ListFilter />
        </Button>
      </div>

      <UserList users={users} setUsers={setUsers} />
    </div>
  )
}
