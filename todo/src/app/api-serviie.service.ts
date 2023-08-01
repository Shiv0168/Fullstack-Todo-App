import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiieService {

  baseUrl:string = "http://localhost:8080/todo";

  constructor(private httpClient:HttpClient) { }

  createTodo(todo:Todo){
    return this.httpClient.post<Todo>(`${this.baseUrl}` , todo)
  }

  allTodo(){
    return this.httpClient.get<Todo[]>(`${this.baseUrl}`)
  }

  getTodoById(id:number){
    return this.httpClient.get<Todo>(`${this.baseUrl}/${id}` )
  }

  updateTodo(id:number , todo:Todo){
    return this.httpClient.put<Todo>(`${this.baseUrl}/${id}` , todo )
  }

  deleteTodo(id:number){
    return this.httpClient.delete(`${this.baseUrl}/${id}` )
  }
}
