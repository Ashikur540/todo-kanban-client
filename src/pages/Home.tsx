import KanbanColumn from "./components/KanbanColumn";
import KanbanCard from "./components/KanbanCard";

import { TodoManagerModal } from "./components/TodoManagerModal";
import { useEffect, useState } from "react";
import { getAllTodos } from "../apis/todo";
import { TodoType } from "../types";

const KanbanBoard = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // process the data from the API
  /*
export const kanbanData = [
  { title: "Incomplete", items: Array(30).fill(todo) },
  { title: "To Do", items: Array(30).fill(todo) },
  { title: "Doing", items: Array(30).fill(todo) },
  { title: "Under Review", items: Array(30).fill(todo) },
  { title: "Completed", items: Array(30).fill(todo) },
  { title: "Overdue", items: Array(30).fill(todo) },
];

*/
  const todoStatusArr = [...new Set(todos && todos.map((todo) => todo.status))];
  const kanbanData = todoStatusArr.map((status) => ({
    title: status,
    todo: todos.filter((todo) => todo.status === status),
    total: todos.filter((todo) => todo.status === status).length,
  }));
  useEffect(() => {
    getAllTodos()
      .then((data) => {
        // console.log("✨ ~ file: Home.tsx:14 ~ .then ~ data:", data);
        setTodos(data);
      })
      .catch((error) => {
        console.log(
          "✨ ~ file: KanbanBoard.tsx:24 ~ getAllTodos ~ error",
          error
        );
      });
  }, []);
  return (
    <section className="p-4">
      <div className="mb-4">
        <TodoManagerModal modalType="add" />
      </div>
      <div className="flex  space-x-4 ">
        {kanbanData.map((column, index) => (
          <KanbanColumn key={index} column={column}>
            {column.todo.map((item, idx) => (
              <KanbanCard todo={item} key={idx} />
            ))}
          </KanbanColumn>
        ))}
      </div>
    </section>
  );
};

export default KanbanBoard;
