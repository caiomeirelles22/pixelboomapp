'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { InputWithLabel } from '@/components/ui/InputWithLabel'
import { Label } from '@/components/ui/label'
import { SheetClose } from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { User } from '@/lib/types/User'

export function AddUser({ onAddUser }: { onAddUser: (user: User) => void }) {
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    rg: '',
    emailTwo: '',
    whatsapp: false,
    status: 'active',
  })

  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleCheckboxChange() {
    setFormData((prev) => ({ ...prev, whatsapp: !prev.whatsapp }))
  }

  function handleSwitchChange() {
    setFormData((prev) => ({ ...prev, active: !prev.status }))
  }

  function handleSubmit(e: React.FormEvent) {
    setIsLoading(true)
    e.preventDefault()
    onAddUser({
      id: new Date().toDateString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      cpf: formData.cpf,
      rg: formData.rg,
      emailTwo: formData.emailTwo,
      status: formData.status ? 'active' : 'inactive',
      age: Math.floor(Math.random() * 21) + 20,
      gender: Math.random() < 0.5 ? 'Homem' : 'Mulher',
      date: '10/05/2025 - 14:00',
      time: '38m22s',
    })
    toast(
      <div className="flex justify-between items-center w-[364px] py-6 pr-8 pl-6">
        <span>Usuário adicionado com sucesso!</span>
        <Button
          variant={'outline'}
          className="rounded-full"
          onClick={() => toast.dismiss()}
        >
          Fechar
        </Button>
      </div>,
      {
        duration: 10000,
        className: 'border border-primary rounded-md px-4 py-2',
      },
    )
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 h-full">
      <InputWithLabel
        label="Nome completo"
        id="name"
        name="name"
        type="text"
        placeholder="Digite o nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputWithLabel
        label="E-mail"
        id="email"
        name="email"
        type="email"
        placeholder="Digite o e-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputWithLabel
        label="Telefone"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Digite o telefone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="whatsapp"
          checked={formData.whatsapp}
          onCheckedChange={handleCheckboxChange}
        />
        <label htmlFor="whatsapp" className="text-sm font-medium leading-none">
          WhatsApp
        </label>
      </div>
      <div className="flex gap-4 flex-wrap md:flex-nowrap">
        <InputWithLabel
          label="CPF"
          id="cpf"
          name="cpf"
          type="tel"
          placeholder="Informe o CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <InputWithLabel
          label="RG"
          id="rg"
          name="rg"
          type="tel"
          placeholder="Informe o RG"
          value={formData.rg}
          onChange={handleChange}
          required
        />
      </div>
      <InputWithLabel
        label="E-mail secundário"
        id="emailTwo"
        name="emailTwo"
        type="email"
        placeholder="Digite seu email"
        value={formData.emailTwo}
        onChange={handleChange}
        required
      />
      <div className="flex bg-primary-foreground border-border border border-solid p-4 gap-4 flex-wrap md:flex-nowrap">
        <div>
          <h1 className="font-medium">Status</h1>
          <span className="text-muted-foreground">
            Defina se o usuário estará ativo ao ser adicionado.
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="status"
            checked={formData.status === 'active'}
            onCheckedChange={handleSwitchChange}
          />
          <Label htmlFor="status">Ativo</Label>
        </div>
      </div>
      <div className="mt-auto ml-auto flex gap-3">
        <SheetClose asChild>
          <Button
            type="button"
            className="rounded-full"
            variant={'outline'}
            disabled={isLoading}
          >
            Cancelar
          </Button>
        </SheetClose>
        <Button
          type="submit"
          className="bg-[#102822] rounded-full"
          disabled={isLoading}
        >
          Adicionar
        </Button>
      </div>
    </form>
  )
}
