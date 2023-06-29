import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthCardService } from 'src/Auth-gards/canActivate.service';
import { AuthDeacivateService } from 'src/Auth-gards/deactivate-guard.service';
import { ResolveService } from 'src/Auth-gards/resolve.service';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'users', component:UsersComponent ,
   canActivate : [AuthCardService], 
    children :[ {path : ':id/:name',component:UsersComponent},]
   },// use CanActivate to restrict the parent root
   // and use canActivateChild to restrict child root
 
  {path : 'categories', component : CategoriesComponent, canDeactivate : [AuthDeacivateService],
    },
  {path : 'not-found' , component :PageNotFoundComponent },
  {path : '**' , redirectTo : 'not-found' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
