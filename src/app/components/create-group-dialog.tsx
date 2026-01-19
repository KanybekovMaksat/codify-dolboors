import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { CourseCategory } from '@/app/types';
import { Plus, X } from 'lucide-react';

interface CreateGroupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateGroupDialog({ open, onOpenChange }: CreateGroupDialogProps) {
  const { addGroup } = useApp();
  const [name, setName] = useState('');
  const [category, setCategory] = useState<CourseCategory>('Scratch');
  const [students, setStudents] = useState<Array<{ firstName: string; lastName: string }>>([
    { firstName: '', lastName: '' },
  ]);

  const handleAddStudent = () => {
    setStudents([...students, { firstName: '', lastName: '' }]);
  };

  const handleRemoveStudent = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleStudentChange = (
    index: number,
    field: 'firstName' | 'lastName',
    value: string
  ) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validStudents = students.filter(
      (s) => s.firstName.trim() && s.lastName.trim()
    );

    if (name.trim() && validStudents.length > 0) {
      addGroup({
        name: name.trim(),
        category,
        students: validStudents.map((s, i) => ({
          id: `s${Date.now()}-${i}`,
          firstName: s.firstName.trim(),
          lastName: s.lastName.trim(),
        })),
      });

      // Reset form
      setName('');
      setCategory('Scratch');
      setStudents([{ firstName: '', lastName: '' }]);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Создать новую группу</DialogTitle>
          <DialogDescription>
            Добавьте информацию о группе и студентах
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Название группы</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Например: Scratch Начинающие"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Категория курса</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as CourseCategory)}>
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Scratch">Scratch</SelectItem>
                  <SelectItem value="Roblox">Roblox</SelectItem>
                  <SelectItem value="HTML/CSS">HTML/CSS</SelectItem>
                  <SelectItem value="JS(React)">JS(React)</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Студенты</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddStudent}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Добавить
                </Button>
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {students.map((student, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Имя"
                      value={student.firstName}
                      onChange={(e) =>
                        handleStudentChange(index, 'firstName', e.target.value)
                      }
                      required
                    />
                    <Input
                      placeholder="Фамилия"
                      value={student.lastName}
                      onChange={(e) =>
                        handleStudentChange(index, 'lastName', e.target.value)
                      }
                      required
                    />
                    {students.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveStudent(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit">Создать группу</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
