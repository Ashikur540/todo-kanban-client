import KanbanColumn from "./components/KanbanColumn";
import KanbanCard from "./components/KanbanCard";

import { TodoManagerModal } from "./components/TodoManagerModal";
import { useEffect, useState } from "react";
import { getAllTodos } from "../apis/todo";
import { TodoType } from "../types";

const KanbanBoard = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // process the data from the API

  const todoStatusArr = [
    ...new Set(todos && todos.map((todo) => todo.status)),
  ].reverse();
  const kanbanData = todoStatusArr.map((status) => ({
    title: status,
    todo: todos.filter((todo) => todo.status === status),
    total: todos.filter((todo) => todo.status === status).length,
  }));
  useEffect(() => {
    setIsLoading(true);
    getAllTodos()
      .then((data) => {
        // console.log("✨ ~ file: Home.tsx:14 ~ .then ~ data:", data);
        setTodos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(
          "✨ ~ file: KanbanBoard.tsx:24 ~ getAllTodos ~ error",
          error
        );
        setIsLoading(false);
      });
  }, []);
  return (
    <section className="p-4">
      {isLoading ? (
        <div className="flex h-screen justify-center items-center">
          <div
            aria-label="Loading..."
            role="status"
            className="flex items-center space-x-2"
          >
            <svg
              className="h-20 w-20 animate-spin stroke-gray-500"
              viewBox="0 0 256 256"
            >
              <line
                x1="128"
                y1="32"
                x2="128"
                y2="64"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="224"
                y1="128"
                x2="192"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="128"
                y1="224"
                x2="128"
                y2="192"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="32"
                y1="128"
                x2="64"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
            <span className="text-4xl font-medium text-gray-500">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};

export default KanbanBoard;
