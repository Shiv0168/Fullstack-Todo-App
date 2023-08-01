import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  {path:"add" , component:AddTodoComponent},
  {path:"view" , component:ViewTodoComponent},
  {path:"edit/:id" , component:EditTodoComponent},
  {path:"" , redirectTo:"view" , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
