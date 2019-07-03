import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
export class User{
  constructor(
    public username : string,
    public password : string
  ){

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User
  loginForm: FormGroup
  
  isLogin=false

  constructor(private router:Router,
    private auth:AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  // this.auth.authenticate(this.user.username,this.user.password) && 
  handleLogin(){
    this.user=this.loginForm.value;
    if(this.auth.authenticate(this.user.username,this.user.password))
    {
      this.isLogin=false;
      this.router.navigate(['welcome',this.user.username])
      
    }
    else{
      
     this.isLogin=true;
    }
  }
  initForm(){
    this.loginForm=this.fb.group({
      username : ['rajveer'],
      password: ['']
    })

  }

}
