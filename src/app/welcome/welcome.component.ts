import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name:''
  message: string
  errorMessage: any

  constructor(
    private route : ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }
  getMessage(){
   
    this.service.getHelloWordBeanService()
    .subscribe(
      response => this.handleResponse(response),
      error =>this.handleError(error)
      );
  }
  getMessageWithParam(){
    
    this.service.getHelloWordBeanServiceWithParam(this.name)
    .subscribe(
      response => this.handleResponse(response),
      error =>this.handleError(error)
      );
  }
  handleResponse(response){
    this.message=response.message
  }
  handleError(error){
    this.errorMessage=error.error.message
  }

}
