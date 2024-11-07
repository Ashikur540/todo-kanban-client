export type TodoType = {
  _id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: number;
  dueDate: string;
};

export type KanbanType = {
  title: string;
  items: TodoType[];
  color: string;
}[];
