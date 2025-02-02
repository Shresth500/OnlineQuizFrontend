import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Authentication',
    children: [
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
