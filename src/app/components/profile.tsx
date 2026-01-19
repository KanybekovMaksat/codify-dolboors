import { useApp } from '@/app/context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { Mail, User } from 'lucide-react';

export function Profile() {
  const { mentor, groups } = useApp();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Профиль ментора</h1>

      <Card>
        <CardHeader>
          <CardTitle>Личная информация</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={mentor.photo} alt={mentor.firstName} />
              <AvatarFallback className="text-2xl">
                {mentor.firstName[0]}
                {mentor.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">
                {mentor.firstName} {mentor.middleName} {mentor.lastName}
              </h2>
              <p className="text-muted-foreground mt-1">Ментор академии Codify</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">О себе</h3>
            <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Группы ({groups.length})</h3>
            <div className="flex flex-wrap gap-2">
              {groups.map((group) => (
                <Badge key={group.id} variant="secondary">
                  {group.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
