import { Injectable } from "@angular/core";
import {  CanActivate, CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
@Injectable()

export class AuthCardService implements CanActivate,CanActivateChild{

    constructor(private authService : AuthService,private route : Router){}
    isLogIn :boolean;
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
         ):boolean | Promise<boolean> | Observable<boolean> {
         
           this.isLogIn = this.authService.isAuthenticated();
           if(this.isLogIn){
            return true ;
           }
           else{
            this.route.navigate(['/']);
           }
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):boolean | Promise<boolean> | Observable<boolean>{
        return this.canActivate(route,state);
    }

}

