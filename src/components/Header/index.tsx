import { Bell, HelpCircle, PanelLeftClose } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Header() {
  return (
    <div className=" h-[72px] w-full border-b border-solid border-[#E4E4E7] ">
      <div className="flex items-center justify-between h-full px-4">
        <Button className="border-none" variant={'outline'} size={'icon'}>
          {' '}
          <PanelLeftClose size={16} />
        </Button>
        <div className="flex gap-1">
          <Button className="rounded-full" variant={'outline'} size={'icon'}>
            <HelpCircle size={16} />
          </Button>
          <Button className="rounded-full" variant={'outline'} size={'icon'}>
            <Bell size={16} />
          </Button>
          <Button className="rounded-full" variant={'outline'} size={'icon'}>
            <Avatar>
              <AvatarImage src={'avatar.svg'} />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </div>
  )
}
