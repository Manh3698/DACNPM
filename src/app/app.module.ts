import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddUniComponent } from './university/add-uni/add-uni.component';
import { EditUniComponent } from './university/edit-uni/edit-uni.component';
import { ListUniComponent } from './university/list-uni/list-uni.component';
import { AddFacComponent } from './facculty/add-fac/add-fac.component';
import { EditFacComponent } from './facculty/edit-fac/edit-fac.component';
import { ListFacComponent } from './facculty/list-fac/list-fac.component';
import { CommentComponent } from './comment/comment.component';
import { AddReviewComponent } from './review/add-review/add-review.component';
import { EditReviewComponent } from './review/edit-review/edit-review.component';
import { ListReviewComponent } from './review/list-review/list-review.component';
import { AddImgComponent } from './images/add-img/add-img.component';
import { EditImgComponent } from './images/edit-img/edit-img.component';
import { ListImgComponent } from './images/list-img/list-img.component';
import { AddRateComponent } from './rate/add-rate/add-rate.component';
import { EditRateComponent } from './rate/edit-rate/edit-rate.component';
import { ListRateComponent } from './rate/list-rate/list-rate.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ListUserComponent,
    EditUserComponent,
    AddUserComponent,
    AddUniComponent,
    EditUniComponent,
    ListUniComponent,
    AddFacComponent,
    EditFacComponent,
    ListFacComponent,
    CommentComponent,
    AddReviewComponent,
    EditReviewComponent,
    ListReviewComponent,
    AddImgComponent,
    EditImgComponent,
    ListImgComponent,
    AddRateComponent,
    EditRateComponent,
    ListRateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
