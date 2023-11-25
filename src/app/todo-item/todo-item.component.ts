import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // @Input() todo: Todo | undefined;
  // @Output() remove = new EventEmitter<void>();
@Input() todo: Todo = { text: '' };
@Output() remove = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
