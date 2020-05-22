import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'
import { ListUserComponent } from './user/list-user/list-user.component'
import { EditUserComponent } from './user/edit-user/edit-user.component'
import { AddUserComponent } from './user/add-user/add-user.component'
const routes: Routes = [
  { path: 'home',component: HomepageComponent },
  { path: '',component: LoginComponent },
  { path: 'user',component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent},
  { path: 'add-user', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
