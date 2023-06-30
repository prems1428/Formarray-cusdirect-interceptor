import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = "InputDec";
genders = ['Male','Female']
users : any;
isAvailable = false;
profileForm : FormGroup;

form : FormGroup ;

constructor(private service : SampleService , private formBuild : FormBuilder){
  this.service.getAllDetails().subscribe(data => {
    this.users = data  ;
  })

  this.form = formBuild.group({
    name : [],
    address : formBuild.array([])
  })
}

  newAddressGroup(){
   const add = this.form.get('address') as FormArray;
   add.push(this.formBuild.group({
    street : [],
    city : []
   }))
  }

  deleteAddressGroup(index: number){
    const add = this.form.get('address') as FormArray;
    add.removeAt(index);
  }


  onSubmit(){
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }

  ngOnInit(): void {
      this.profileForm = new FormGroup({
        'userData': new FormGroup({
          'name': new FormControl(''),
          'email': new FormControl(''),
        }),
  
        'gender': new FormControl('female'),
        'hobbies': new FormArray([])
      });
  }

  onAddHobby(){

    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.profileForm.get('hobbies')).push(control);
  }
}
