import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='rajveer'
  passdword=''
  isLogin=false

  constructor(private router:Router,
    private auth:AuthService) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.auth.authenticate(this.username,this.passdword))
    {
      this.router.navigate(['welcome',this.username])
      return this.isLogin=false;
    }
    else{
      return this.isLogin=true;
    }
  }

}
