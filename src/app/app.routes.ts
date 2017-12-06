import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OrgFormComponent} from './org-form/org-form.component';
import {OrgDetailsComponent} from './container/org-details/org-details.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {HomeComponent} from './home/home.component';
import {ListGarderieComponent} from './container/list-garderie/list-garderie.component';
import {ContainerComponent} from './container/container.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profil/:mode', component: PersonFormComponent },
  { path: 'nursery', component: OrgFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'espaceCreche', component: ContainerComponent , children: [
      { path: 'list', component: ListGarderieComponent },
      { path: 'detail/:id', component: OrgDetailsComponent }
    ]},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
