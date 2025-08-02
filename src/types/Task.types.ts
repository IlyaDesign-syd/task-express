
export interface TaskColumn {
  columnId: string;
  columnName: string;
  taskList: Task[];
}

export interface Task {
  taskId: string;
  taskName: string;
  taskDescription?: string;
  taskStatus: string;
  createdAt?: string;
}