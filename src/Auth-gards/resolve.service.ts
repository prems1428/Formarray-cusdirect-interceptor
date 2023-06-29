import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

interface User{
    id : string;
    name : string;
}

@Injectable()

export class ResolveService implements Resolve<User>{

    constructor(private userService : UserService,private route : ActivatedRoute){}

    resolve(route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot
           ): User{

            let id = this.route.params['id'];

            let details = this.userService.getUser(id);

            return details;
        
    }

}