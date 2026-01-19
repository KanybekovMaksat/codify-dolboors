import { useApp } from '@/app/context/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Plus, Users, FolderKanban } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { CreateGroupDialog } from '@/app/components/create-group-dialog';

const categoryColors = {
  Scratch: 'bg-orange-500',
  Roblox: 'bg-red-500',
  'HTML/CSS': 'bg-blue-500',
  'JS(React)': 'bg-cyan-500',
  Python: 'bg-yellow-500',
};

export function Dashboard() {
  const { groups, projects } = useApp();
  const [createGroupOpen, setCreateGroupOpen] = useState(false);

  const getProjectCount = (groupId: string) => {
    return projects.filter((p) => p.groupId === groupId).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Управляйте группами и проектами студентов
          </p>
        </div>
        <Button onClick={() => setCreateGroupOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Создать группу
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Link key={group.id} href={`/group/${group.id}`}>
            <a>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="line-clamp-1">{group.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {group.category}
                      </CardDescription>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        categoryColors[group.category]
                      }`}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{group.students.length} студентов</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FolderKanban className="h-4 w-4 mr-2" />
                      <span>{getProjectCount(group.id)} проектов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>

      {groups.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Нет групп</h3>
          <p className="text-muted-foreground mb-4">
            Создайте первую группу для начала работы
          </p>
          <Button onClick={() => setCreateGroupOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Создать группу
          </Button>
        </div>
      )}

      <CreateGroupDialog open={createGroupOpen} onOpenChange={setCreateGroupOpen} />
    </div>
  );
}
