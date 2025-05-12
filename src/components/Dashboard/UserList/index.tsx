'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { UserCard } from './UserCard'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { getPaginationRange } from '@/lib/functions/getPaginationRange'
import { User } from '@/lib/types/User'

export function UserList({
  users,
  setUsers,
}: {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 6

  const deleteUser = (userToDelete: User) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user !== userToDelete))
  }

  const paginatedUsers = users.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE)
  const paginationRange = getPaginationRange(currentPage, totalPages)

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="space-y-4 overflow-y-scroll max-h-[45vh]">
        {paginatedUsers.map((user, index) => (
          <UserCard user={user} key={index} onDelete={deleteUser} />
        ))}
      </div>

      <Pagination className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
        <span className="text-muted-foreground">5 de 294 itens</span>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>

          {paginationRange.map((page, index) =>
            typeof page === 'string' ? (
              <span key={index} className="px-2">
                ...
              </span>
            ) : (
              <Button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded text-primary hover:bg-gray-300 cursor-pointer ${
                  currentPage === page ? 'bg-gray-200' : 'bg-transparent'
                }`}
              >
                {page}
              </Button>
            ),
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </PaginationItem>
        </PaginationContent>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-muted-foreground">Itens por página</span>
          <Select defaultValue={'5'}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Pagination>
    </div>
  )
}
