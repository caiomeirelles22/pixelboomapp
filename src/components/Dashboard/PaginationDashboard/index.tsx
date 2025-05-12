import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { getPaginationRange } from '@/lib/functions/getPaginationRange'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  totalItems: number
  itemsPerPage: number
}

export function PaginationDashboard({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const paginationRange = getPaginationRange(currentPage, totalPages)

  return (
    <Pagination className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
      <span className="text-muted-foreground">
        {(currentPage - 1) * itemsPerPage + 1} -{' '}
        {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems} itens
      </span>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
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
              className={`px-3 py-1 rounded text-primary hover:bg-gray-300 cursor-pointer ${currentPage === page ? 'bg-gray-200' : 'bg-transparent'}`}
            >
              {page}
            </Button>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
