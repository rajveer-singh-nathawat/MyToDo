import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { ToDo } from '../todo/todo.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { DatePipe } from '@angular/common';
import { HttpInterceptingHandler } from '@angular/common/http/src/module';



@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todoForm: FormGroup
  id: number
  todo: ToDo

  constructor(
    private toDoDataService: ToDoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dp: DatePipe
  ) { }

  ngOnInit() {

    this.initForm();



    this.route.params.subscribe((params: any) => {

      if (params.hasOwnProperty('id')) {
        this.id = params['id'];
      }
    });





    this.todo = new ToDo(this.id, '', new Date(), false);
    if (this.id != null && this.id != undefined) {
      this.toDoDataService.getToDosById('rajveer', this.id)
        .subscribe(data => {
          this.todo = data;


          this.todoForm.patchValue(this.todo)
          this.todoForm.controls['targateDate'].setValue(this.dp.transform(this.todo.targateDate, "yyyy-MM-dd"));


        }
        )


    }
  }

  saveTodo() {
    if (this.id == null) {
      this.todo = this.todoForm.value
      this.toDoDataService.createTodo('rajveer', this.todo)
      .subscribe(data => {
        this.router.navigate(['todo']);
      })

    }
    else {
      this.toDoDataService.updateTodo('rajveer', this.id, this.todoForm.value)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todo']);

          }

        )
    }
  }
  initForm() {
    this.todoForm = this.fb.group({
      id: [],
      description: [''],
      targateDate: [],
      isDone: [false]


    })
  }



}
