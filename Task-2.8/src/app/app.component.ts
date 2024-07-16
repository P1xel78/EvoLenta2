import { Component } from '@angular/core';
import { ITask, TasksAdd, TasksDelete, TasksDone } from '../store/model/todo.model';
import { Store } from '@ngxs/store';
import { TasksState } from '../store/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private store: Store) {}
  newTodo: string = '';
  tasksList: ITask[] = [];

  ngOnInit() {
    this.store
      .select(TasksState.getTasks)
      .subscribe((task) => (this.tasksList = task));
  }

  addTodo() {
    this.store.dispatch(
      new TasksAdd({
        id: this.tasksList.length,
        taskText: this.newTodo,
        isDone: false,
      })
    );
    this.newTodo = '';
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TasksDelete(id));
  }

  taskChecked(id: number, $event: any) {
    const isChecked = $event.target.checked;
    this.store.dispatch(new TasksDone(id, isChecked));
  }
}
