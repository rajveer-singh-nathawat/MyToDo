import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
export class GetHelloWorld{
  constructor(public message: string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  getHelloWordBeanService(){
    return this.http.get<GetHelloWorld>('http://localhost:8080/hello');
  }
  getHelloWordBeanServiceWithParam(name){
    return this.http.get<GetHelloWorld>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
  
}
