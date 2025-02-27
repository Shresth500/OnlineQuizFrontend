import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { authGuard } from '../common/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddQuizComponent } from './AddQuiz/add-quiz/add-quiz.component';
import { IndividualQuizComponent } from './individual-quiz/individual-quiz.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: QuizComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: AddQuizComponent,
        pathMatch: 'full',
      },
      {
        path: 'quizNotTaken',
        component: IndividualQuizComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full',
      },
    ],
  },
];
