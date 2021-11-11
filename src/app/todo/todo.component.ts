import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  today!: Date;
  todos: any;


  constructor(private todoService: TodoService, private router : Router) {

   }

  ngOnInit() {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;
  }

  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i: any){
    this.todoService.onChangeIsModif(i);
  }

  onView(id: number){
    this.router.navigate(["single-todo",id]);
  }

}
