import { Injectable } from "@angular/core";
import { CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export interface IDeactivateGuard{
    canExit : () => boolean | Promise<boolean> | Observable<boolean>; 
}
@Injectable()

export class AuthDeacivateService implements CanDeactivate<IDeactivateGuard>{

   canDeactivate(component: IDeactivateGuard, 
                 currentRoute: ActivatedRouteSnapshot, 
                 currentState: RouterStateSnapshot, 
                 nextState: RouterStateSnapshot
                 ): boolean | Promise<boolean> | Observable<boolean> {

            return component.canExit();
       
   }

}