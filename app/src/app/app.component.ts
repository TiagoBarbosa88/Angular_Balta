import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minhas tarefas"

  /**
   * ctor
   */
  constructor() {


    this.todos.push(new Todo(1, 'Cortar o cabelo', true))
    this.todos.push(new Todo(2, 'Ir ao supermercado', false))
    this.todos.push(new Todo(3, 'Passear com o cachorro', false))


  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if( index !== -1) {
      this.todos.splice(index, 1);
    }


  }

  markAsDone(todo: Todo){
    todo.done = true;

  }

  markAsUndone(todo: Todo){
    todo.done = false;

  }

}
