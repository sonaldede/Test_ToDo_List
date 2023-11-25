import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo = '';

  constructor(private todoService: TodoService) {}

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo({
        text: this.newTodo,
      });
      this.newTodo = '';
    }
  }

  removeTodo(index: number): void {
    this.todoService.removeTodo(index);
  }
  ngOnInit(): void {
  }

}
