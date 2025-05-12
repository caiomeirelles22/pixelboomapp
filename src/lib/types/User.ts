export type User = {
  id?: string
  name: string
  email: string
  phone: string
  whatsapp: boolean
  cpf: string
  rg: string
  emailTwo: string
  status: 'active' | 'inactive'
  age?: number
  gender?: string
  date?: string
  time?: string
}
