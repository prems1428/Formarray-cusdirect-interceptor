import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title = 'InputDec';
    todo : any;
    getVal : any;
    isDisable:boolean = false;
    profileForm = new FormGroup({
      name : new FormControl(''),
      age : new FormControl(''),
      contact :new FormControl('')
    });
    constructor(private service : SharedService){
      
     }

     ngOnInit(): void {
       this.submit();
     }
     onSubmit(){

      let data = this.profileForm.value;
      console.log(this.profileForm.value);
      this.service.post(data).subscribe(data=>{
      })
      this.submit();
      this.profileForm.reset();
     }

     submit(){
      this.service.get().subscribe(x=>{
        this.todo = x;
      })
     }
     
     editData(id : number){

      this.isDisable = true;
       this.service.getId(id).subscribe(x=>{
        let getEditVal :any=[];
        getEditVal = x;
        
        this.profileForm.setValue({
          name : getEditVal.name,
          age : getEditVal.age,
          contact : getEditVal.contact
        })

       })

       
     }
     updateData(id:number){

      this.isDisable=false;
      let data = this.profileForm.value;
      this.service.update(id,data).subscribe(x=>{
        this.submit();
      })
      this.profileForm.reset();
     }
     deleteData(id :number){

      this.service.delete(id).subscribe(x=>{
        this.submit();
      })
     }
  
}
