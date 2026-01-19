import { useState, ReactNode } from 'react';
import { useApp } from '@/app/context/AppContext';
import { Link, useLocation } from 'wouter';
import { ThemeToggle } from '@/app/components/theme-toggle';
import { Button } from '@/app/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/app/components/ui/avatar';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Separator } from '@/app/components/ui/separator';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Menu,
  X,
  User,
} from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { mentor, groups } = useApp();
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/profile', icon: User, label: 'Профиль' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="font-semibold text-lg">Codify</h1>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen w-64 bg-background border-r transition-transform',
          'lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 hidden lg:block">
            <h1 className="text-2xl font-bold text-primary">Codify</h1>
            <p className="text-sm text-muted-foreground">Платформа проектов</p>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3">
            <div className="space-y-1 py-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </Link>
              ))}
            </div>

            <Separator className="my-4" />

            {/* Groups */}
            <div className="py-4">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Группы
              </h3>
              <div className="space-y-1">
                {groups.map((group) => (
                  <Link key={group.id} href={`/group/${group.id}`}>
                    <a
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                        location === `/group/${group.id}`
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                    >
                      <Users className="h-4 w-4" />
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-sm">{group.name}</div>
                        <div className="text-xs opacity-70">{group.category}</div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollArea>

          {/* User Profile */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={mentor.photo} alt={mentor.firstName} />
                <AvatarFallback>
                  {mentor.firstName[0]}
                  {mentor.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {mentor.firstName} {mentor.lastName}
                </p>
                <p className="text-xs text-muted-foreground">Ментор</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="hidden lg:flex items-center justify-end p-4 border-b">
          <ThemeToggle />
        </div>
        <main className="p-6 pt-20 lg:pt-6">{children}</main>
      </div>
    </div>
  );
}
