import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ITask, TasksAdd, TasksDelete, TasksDone } from './model/todo.model';

@State<ITask[]>({
  name: 'tasks',
  defaults: [],
})
@Injectable()
export class TasksState {
  @Selector()
  static getTasks(state: ITask[]): ITask[] {
    return state;
  }

  @Action(TasksAdd)
  addTask(ctx: StateContext<ITask[]>, action: TasksAdd) {
    ctx.setState([
      ...ctx.getState(),
      {
        id: action.payload.id,
        taskText: action.payload.taskText,
        isDone: action.payload.isDone,
      },
    ]);
  }

  @Action(TasksDelete)
  removeTask(ctx: StateContext<ITask[]>, action: TasksDelete) {
    const state = ctx.getState();
    const filteredTasks = state.filter((task) => task.id !== action.id);
    ctx.setState(filteredTasks);
  }

  @Action(TasksDone)
  taskIsDone(ctx: StateContext<ITask[]>, action: TasksDone) {
    const state = ctx.getState();
    state.filter((task) => {
      if (task.id === action.id) task.isDone = action.isDone;
    });
  }
}