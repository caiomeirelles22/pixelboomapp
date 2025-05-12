import {
  Activity,
  ChevronsUpDown,
  FileCheck,
  Headset,
  Settings,
  User,
} from 'lucide-react'
import { ButtonItems } from '../ButtonItems'

export function SidebarContent() {
  return (
    <div className="flex w-full flex-col min-w-60  bg-muted/40 h-full ">
      <div className="flex flex-col gap-4">
        <header className="w-full flex h-[72px] items-center px-6 border-r border-b border-solid border-[#E4E4E7] bg-background gap-4 ">
          <div className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
            Logo
          </div>
        </header>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-accent size-8 rounded-lg p-2.5 gap-2 flex items-center justify-center text-[#102822] font-bold text-[12px]">
              FA
            </div>
            <div className="flex-1 text-foreground font-bold">
              <span>Filial A</span>
            </div>
            <ChevronsUpDown size={16} />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className="text-sidebar-foreground text-[12px] h-8 flex items-center">
              Menu
            </span>
            <ButtonItems
              icon={<Activity />}
              isActive={false}
              title="Dashboard"
            />
            <ButtonItems icon={<User />} isActive={true} title="Usuários" />
            <ButtonItems
              icon={<FileCheck />}
              isActive={false}
              title="Documentos"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className="text-sidebar-foreground text-[12px] h-8 flex items-center">
              Configurações
            </span>
            <ButtonItems icon={<Settings />} isActive={false} title="Geral" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center mt-auto pt-6 pb-4 px-4">
        <span>Precisa de ajuda?</span>
        <Headset size={16} />
      </div>
    </div>
  )
}
