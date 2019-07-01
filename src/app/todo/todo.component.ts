import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router } from '@angular/router';

export class ToDo{
  constructor(
    public id : number,
    public description :string,
    public targateDate : Date,
    public isDone : boolean  
  ){}
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  message : any =''
  
  todos: ToDo[]

  constructor(
    private toDoDataService : ToDoDataService,
    private router : Router) { }

  ngOnInit() {
   this.refreshToDos();
  }
refreshToDos(){
  this.toDoDataService.getAllToDosWithUserName('rajveer')
  .subscribe(
    response => {
      this.todos=response;
    })
}


  deleteToDo(id){
    this.toDoDataService.deleteToDosById('rajveer',id).subscribe(
      response => {
        this.message=` successfully deleted todo ${id}`;
        this.refreshToDos();
          })
    }

    updateToDo(id){
      this.router.navigate(['todo/edit/',id]);
    }
    addToDo(){
      this.router.navigate(['todo/new']);
    }

}
