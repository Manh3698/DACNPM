import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'
import { ListUserComponent } from './user/list-user/list-user.component'
import { EditUserComponent } from './user/edit-user/edit-user.component'
import { AddUserComponent } from './user/add-user/add-user.component'
import { AddUniComponent } from './university/add-uni/add-uni.component'
import { EditUniComponent } from './university/edit-uni/edit-uni.component'
import { ListUniComponent } from './university/list-uni/list-uni.component'
import {ListRateComponent}  from './rate/list-rate/list-rate.component'
import { AddRateComponent } from './rate/add-rate/add-rate.component';
import { EditRateComponent } from './rate/edit-rate/edit-rate.component';

const routes: Routes = [
  { path: 'home',component: HomepageComponent },
  { path: '',component: LoginComponent },
  { path: 'user',component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'uni', component: ListUniComponent},
  { path: 'edit-uni', component: EditUniComponent},
  { path: 'add-uni', component: AddUniComponent},
  { path: 'rate', component: ListRateComponent },
  { path: 'add-rate', component: AddRateComponent},
  { path: 'edit-rate', component: EditRateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
