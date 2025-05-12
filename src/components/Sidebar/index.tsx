'use client'

import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '../ui/sheet'
import { SidebarContent } from './SidebarContent'

export function Sidebar() {
  return (
    <>
      <div className="sm:hidden flex items-center p-4 border-b bg-background">
        <Sheet>
          <SheetTrigger asChild>
            <div className="inline-flex items-center justify-center p-2 rounded-md border">
              <Menu />
            </div>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="p-0"
            aria-describedby={'Menu lateral'}
          >
            <>
              <SheetDescription className="sr-only">
                Use o menu lateral para navegar pela aplicação.
              </SheetDescription>
              <SheetTitle className="sr-only">Menu lateral</SheetTitle>
              <SidebarContent />
            </>
          </SheetContent>
        </Sheet>
        <h1 className="ml-4 font-bold text-lg">Logo</h1>
      </div>

      <div className="hidden sm:flex">
        <SidebarContent />
      </div>
    </>
  )
}
