import { Component, OnInit } from '@angular/core';
import { Observable, catchError, from, fromEvent, fromEventPattern, interval, map, of, pipe, take, zip } from 'rxjs';
import { custObservable } from './custObservable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

    title = 'InputDec';
    select:boolean;
    a:any;
    b:any;

  constructor(){
      this.select = false;
      this.a = [
        {name:'Sam',
        age : '12',
        status : true
      },
      {name:'Kumar',
        age : '34',
        status : false
      },
      {name:'Arun',
        age : '45',
        status : true
      }
      ];
  }

  unCheck() {
    for (var i = 0; i < this.a.length; i++) {
      this.a[i].status = this.select;
    }
    this.getCheckedName();
  }
  selectAll() {
    this.select = this.a.every(function(item:any) {
        return item.status == true;
      })
    this.getCheckedName();
  }
 
  getCheckedName(){
    this.b = [];
    for (var i = 0; i < this.a.length; i++) {
      if(this.a[i].status)
      this.b.push(this.a[i]);
    }
    this.b = JSON.stringify(this.b);
  }


      }
