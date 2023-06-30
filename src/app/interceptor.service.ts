import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()

export class customHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor",req);
        const newReq = req.clone({url : "https://jsonplaceholder.typicode.com/" + req.url ,
                                  headers : req.headers.set('Authorization','prems') });
        return next.handle(newReq)
        .pipe(
            tap((result)=>{
            console.log('Success',result);
            },
            (error)=>{
            console.log('error',error);
            })
        )
    }
}             