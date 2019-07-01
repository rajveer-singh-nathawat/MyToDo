import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenticate(username ,password ){
    if(username==='rajveer' && password==='singh'){
      sessionStorage.setItem('authenticateUser',username)
      return true
    }
    return false
  }
  isUserLogin(){
    let user=sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }
  logOut(){
    sessionStorage.removeItem('authenticateUser')
  }
}
