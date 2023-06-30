import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }

//  api = ;

  getAllDetails(){
    return this.http.get('users');
  }
}
