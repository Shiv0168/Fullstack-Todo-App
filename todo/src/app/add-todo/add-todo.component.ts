import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/Todo';
import { ApiServiieService } from '../api-serviie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  addTodo: any;

  constructor(
    private apiService: ApiServiieService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addTodo = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get title() {
    return this.addTodo.get('title');
  }

  get description() {
    return this.addTodo.get('description');
  }

  submitTodo() {
    this.apiService.createTodo(this.addTodo.value).subscribe({
      next: (data) => {
        console.log(data);

        this.addTodo.reset();
        this.router.navigate(['/view']);
      },
    });
  }
}
