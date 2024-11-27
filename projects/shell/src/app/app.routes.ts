import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'todo',
        exposedModule: './TaskListComponent',
      }).then(m => m.TodoListComponent),
  },
  { path: '**', component: HomeComponent },
];
