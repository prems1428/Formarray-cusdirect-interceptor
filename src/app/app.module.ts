import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthService } from 'src/Auth-gards/auth.service';
import { AuthCardService } from 'src/Auth-gards/canActivate.service';
import { AuthDeacivateService } from 'src/Auth-gards/deactivate-guard.service';
import { ResolveService } from 'src/Auth-gards/resolve.service';
import { UserService } from 'src/Auth-gards/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthCardService,AuthDeacivateService,ResolveService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
