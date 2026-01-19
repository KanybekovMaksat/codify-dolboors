import { Route, Switch } from 'wouter';
import { ThemeProvider } from '@/app/components/theme-provider';
import { AppProvider } from '@/app/context/AppContext';
import { Layout } from '@/app/components/layout';
import { Dashboard } from '@/app/components/dashboard';
import { Profile } from '@/app/components/profile';
import { GroupPage } from '@/app/components/group-page';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/group/:id">
              {(params) => <GroupPage params={params} />}
            </Route>
            <Route>404 - Страница не найдена</Route>
          </Switch>
        </Layout>
        <Toaster />
      </AppProvider>
    </ThemeProvider>
  );
}