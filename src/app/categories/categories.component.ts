import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivateGuard } from 'src/Auth-gards/deactivate-guard.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements IDeactivateGuard{

  users : { id : string , name : string};
  editUserDetails : { id : string , name : string}; 
  constructor(private route : ActivatedRoute){ }

 ngOnInt(){

  this.route.params.subscribe((x:Params)=>{
    this.users = {
      id : x['id'],
      name : x['name']
    }
  });

  this.editUserDetails = {...this.users};

 }

  canExit(){

    // if(this.editUserDetails.id != this.users.id || this.editUserDetails.name != this.users.id){
      if(confirm('Are You Sure You Want To Exit')){
        return true;
       }
       return false;
    }
    //  return true;
  // }

}
