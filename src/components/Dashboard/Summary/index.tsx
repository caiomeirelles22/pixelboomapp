import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SummaryProps {
  total: number
  active: number
  inactive: number
  sessionTime: string
}

export function Summary({
  active,
  inactive,
  sessionTime,
  total,
}: SummaryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Usuários</CardTitle>
        </CardHeader>
        <CardContent>{total}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tempo de sessão</CardTitle>
        </CardHeader>
        <CardContent>{sessionTime}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Ativos</CardTitle>
        </CardHeader>
        <CardContent>{active}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Inativos</CardTitle>
        </CardHeader>
        <CardContent>{inactive}</CardContent>
      </Card>
    </div>
  )
}
