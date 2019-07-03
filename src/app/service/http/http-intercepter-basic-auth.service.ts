import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username= 'user'
    let password= 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    req=req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
      })
    return next.handle(req)
  }
  }
