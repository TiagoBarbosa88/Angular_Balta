import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";
  public form: FormGroup;
  public mode: String = 'list';



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    this.load();

/*     this.todos.push(new Todo(1, 'Cortar o cabelo', true))
    this.todos.push(new Todo(2, 'Ir ao supermercado', false))
    this.todos.push(new Todo(3, 'Passear com o cachorro', false)) */


  }


  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false))
    this.save();
    this.clear();

  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if( index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();

  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();

  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();

  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }

  changeMode(mode: String) {
    this.mode = mode;
  }
}

