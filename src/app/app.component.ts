import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/Auth-gards/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   title = 'InputDec';
  constructor( private authService : AuthService ){ }

  ngOnInit(): void {
    
     }
    onLogIn(){
      this.authService.login();
    }
    onLogOut(){
      this.authService.logout();
    }
  
}
