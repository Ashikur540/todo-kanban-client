export type TodoType = {
  _id: string;
  todo: string;
  status: string;
  attachments: string[];
  createdAt: string;
};

export type KanbanType = {
  title: string;
  items: TodoType[];
  color: string;
}[];
