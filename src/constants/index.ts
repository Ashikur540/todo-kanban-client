import { TodoType } from "../types";

export const todo: TodoType = {
  _id: 1,
  title: "Design UI",
  description: "Create Wireframes and Design UI of the task of the project",
  status: "To Do",
  assignedTo: 1,
  dueDate: "2023-06-30",
};

export const kanbanData = [
  { title: "Incomplete", items: Array(30).fill(todo) },
  { title: "To Do", items: Array(30).fill(todo) },
  { title: "Doing", items: Array(30).fill(todo) },
  { title: "Under Review", items: Array(30).fill(todo) },
  { title: "Completed", items: Array(30).fill(todo) },
  { title: "Overdue", items: Array(30).fill(todo) },
];
