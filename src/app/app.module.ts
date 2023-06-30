import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { customHttpInterceptor } from './interceptor.service';
import { customDirective } from './highlight.directive';
import { AlternateDirective } from './alternateIf.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    customDirective,
    AlternateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ {provide : HTTP_INTERCEPTORS , useClass : customHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
