import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users :{ id:string ; name:string };
  constructor(private route : Router ,private actRoute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.users ={
      id : this.actRoute.snapshot.params['id'],
      name : this.actRoute.snapshot.params['name']
    };
    this.actRoute.params.subscribe((data:Params)=>{
        this.users = {
          id : data['id'],
          name : data['name']
        };
    });
    console.log(this.actRoute.snapshot.queryParams);
    console.log(this.actRoute.snapshot.fragment);
    this.actRoute.queryParams.subscribe(data=>{
      console.log(data);
    });
    this.actRoute.fragment.subscribe(data=>{
      console.log(data);
    });

  }

  onCategory(){

    // this.route.navigateByUrl('/categories');
    this.route.navigate(['/categories']);
  }

  queryfragment(){
        
    this.route.navigate(['/categories'],{
      queryParams : {page :1 , search : 'prems'},
      fragment : 'loading',
    });
  }

}
