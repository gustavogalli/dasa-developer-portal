import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { AuthComponent } from './pages/auth/auth.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { ApisComponent } from './pages/apis/apis.component';
import { ApiDetailComponent } from './pages/api-detail/api-detail.component';
import { AppsComponent } from './pages/apps/apps.component';
import { StatesComponent } from './pages/states/states.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'design-system', component: DesignSystemComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'apis', component: ApisComponent },
  { path: 'api-detail', component: ApiDetailComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'states', component: StatesComponent }
];