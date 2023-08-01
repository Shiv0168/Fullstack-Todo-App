import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/Todo';
import { ApiServiieService } from '../api-serviie.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {


  allTodo:Todo[] = [];

  constructor( private apiService:ApiServiieService){};

  ngOnInit(): void {
    this.apiService.allTodo().subscribe({
      next:(data)=>{
        this.allTodo = data;
      }
    })
  }

  deleteTodo(id:any){
    this.apiService.deleteTodo(id).subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }
}
