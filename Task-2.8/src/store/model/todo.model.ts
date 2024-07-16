export interface ITask {
  id: number | null;
  taskText: string | null;
  isDone: boolean | null;
}

export class TasksAdd {
  static readonly type = '[Task]: Task Add';
  constructor(public payload: ITask) {}
}

export class TasksDelete {
  static readonly type = '[Task]: Task Delete';
  constructor(public id: number) {}
}

export class TasksDone {
  static readonly type = '[Task]: Task Done';
  constructor(public id: number, public isDone: boolean) {}
}