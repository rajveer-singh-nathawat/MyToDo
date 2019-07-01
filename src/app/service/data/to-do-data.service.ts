import { Injectable } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http: HttpClient) { }
  getAllToDosWithUserName(username){
    return this.http.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  
  deleteToDosById(username,id){
     return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    
  }
  getToDosById(username,id){
    return this.http.get<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`);
   
 }
  updateTodo(username,id,todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo:ToDo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
    


}
}