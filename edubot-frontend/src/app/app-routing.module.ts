import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UnansweredQuestionsComponent } from './unanswered-questions/unanswered-questions.component';
import { MoodleComponent } from './moodle/moodle.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'unanswered-questions', component: UnansweredQuestionsComponent},
  { path: '**', pathMatch: 'full', component: MoodleComponent },
  { path: 'menu', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
