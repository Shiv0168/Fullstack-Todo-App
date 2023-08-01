import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiieService } from '../api-serviie.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit{
  editTodo:any;

constructor(private apiService:ApiServiieService , private fb:FormBuilder , private router:Router , private activatedRoute:ActivatedRoute){

  this.editTodo = this.fb.group({
    title : ['' , [Validators.required]],
    description: ['' , [Validators.required]],
  })
};

get title(){
  return this.editTodo.get("title");
}

get description(){
  return this.editTodo.get("description");
}

  ngOnInit(): void {
    this.apiService.getTodoById(this.activatedRoute.snapshot.params["id"]).subscribe({
      next:(data)=>  
      this.editTodo = this.fb.group({
        title : [data.title , [Validators.required]],
        description: [data.description , [Validators.required]],
      })
    })
  }

  submitTodo(){
    this.apiService.createTodo(this.editTodo.value).subscribe({
      next:(data)=>{
        console.log(data);
        
        this.editTodo.reset();
        this.router.navigate(["/view"]);
      }
    })
  }
}
