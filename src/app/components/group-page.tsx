import { useApp } from '@/app/context/AppContext';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, Plus, Users, FileText } from 'lucide-react';
import { Link } from 'wouter';

interface GroupPageProps {
  params: { id: string };
}

export function GroupPage({ params }: GroupPageProps) {
  const { getGroupById, getProjectsByGroupId } = useApp();
  const [, navigate] = useLocation();
  const group = getGroupById(params.id);

  if (!group) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Группа не найдена</h2>
        <Button onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться
        </Button>
      </div>
    );
  }

  const projects = getProjectsByGroupId(group.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{group.name}</h1>
          <p className="text-muted-foreground mt-1">{group.category}</p>
        </div>
      </div>

      {/* Студенты */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Студенты</CardTitle>
              <CardDescription>{group.students.length} студентов в группе</CardDescription>
            </div>
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {group.students.map((student) => (
              <div
                key={student.id}
                className="flex items-center gap-2 p-2 rounded-lg border"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {student.firstName} {student.lastName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Проекты */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Проекты ({projects.length})</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Добавить проект
          </Button>
        </div>

        {projects.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Нет проектов</h3>
              <p className="text-muted-foreground mb-4">
                Создайте первый проект для этой группы
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Создать проект
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="line-clamp-2">{project.name}</CardTitle>
                    <Badge variant={project.type === 'team' ? 'default' : 'secondary'}>
                      {project.type === 'team' ? 'Командный' : 'Индивидуальный'}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.files.length} файлов</span>
                    <span>{new Date(project.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
