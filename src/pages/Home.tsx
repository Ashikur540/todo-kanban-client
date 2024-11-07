import {
  CalendarDays,
  FileStackIcon,
  MessagesSquare,
  Paperclip,
  User,
} from "lucide-react";
import IconStackFill from "../components/icons/IconStackFill";
import IconClipboardList from "../components/icons/IconClipboardFill";
import { genRandomNum } from "../lib/utils";

export type TodoType = {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: number;
  dueDate: string;
};

const todo: TodoType = {
  id: 1,
  title: "Design UI",
  description: "Create wireframes",
  status: "To Do",
  assignedTo: 1,
  dueDate: "2023-06-30",
};

export type KanbanType = {
  title: string;
  items: TodoType[];
  color: string;
}[];

const kanbanData = [
  { title: "Incomplete", items: Array(30).fill(todo), color: "bg-gray-100" },
  { title: "To Do", items: Array(30).fill(todo), color: "bg-gray-100" },
  { title: "Doing", items: Array(30).fill(todo), color: "bg-gray-100" },
  {
    title: "Under Review",
    items: Array(30).fill(todo),
    color: "bg-gray-100",
  },
  { title: "Completed", items: Array(30).fill(todo), color: "bg-gray-100" },
  { title: "Overdue", items: Array(30).fill(todo), color: "bg-gray-100" },
];

const KanbanBoard = () => {
  return (
    <div className="flex  space-x-4 p-4">
      {kanbanData.map((column, index) => (
        <div
          key={index}
          className={`flex-shrink-0 max-w-[400px] min-w-[320px] h-[100vh] ${column.color} rounded-lg shadow-lg`}
        >
          <div className="p-4 font-semibold text-lg border-b">
            {column.title}
          </div>
          <div className="overflow-y-auto h-full p-2 space-y-4">
            {column.items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
                // tabIndex="0"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center mb-2 gap-2">
                    {item ? (
                      <img
                        src={`https://randomuser.me/api/portraits/men/${genRandomNum(
                          1,
                          40
                        )}.jpg`}
                        alt={`user-image-${idx}`}
                        className="w-7 h-7 rounded-full"
                      />
                    ) : (
                      <User className="w-6 h-6 text-gray-400" />
                    )}
                    <p className="text-sm font-semibold">Client Name</p>
                  </div>
                  <div className="flex items-center mb-2 gap-2">
                    {item ? (
                      <img
                        src={`https://randomuser.me/api/portraits/men/${genRandomNum(
                          1,
                          40
                        )}.jpg`}
                        alt={`user-image-${idx}`}
                        className="w-7 h-7 rounded-full"
                      />
                    ) : (
                      <User className="w-6 h-6 text-gray-400" />
                    )}
                    <p className="text-sm font-semibold">Sadiq Istiak</p>
                  </div>
                </div>
                {/* todo details */}
                <div className="flex justify-between items-center gap-4">
                  <div className="inline-flex justify-start items-center gap-2 mb-2">
                    <IconStackFill className="text-[#666666] text-lg" />
                    <p className="text-gray-600 ">{item.description}</p>
                  </div>
                  <div className=" justify-start items-center gap-2 mb-2 bg-gray-200 p-1 rounded-sm inline-flex">
                    <IconClipboardList className="text-[#666666]" />
                    <p className="text-gray-600 text-sm">1/2</p>
                  </div>
                </div>

                <div className="flex justify-stretch items-center gap-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${genRandomNum(
                      1,
                      40
                    )}.jpg`}
                    alt={`user-image-${idx}`}
                    className="w-7 h-7 rounded-full"
                  />
                  <img
                    src={`https://randomuser.me/api/portraits/men/${genRandomNum(
                      1,
                      40
                    )}.jpg`}
                    alt={`user-image-${idx}`}
                    className="w-7 h-7 rounded-full"
                  />
                  <div className="bg-slate-200 text-xs h-8 w-8 rounded-full font-semibold text-gray-500 text-center flex justify-center items-center flex-shrink-0">
                    <p>12+</p>
                  </div>
                  <div className=" flex justify-start items-center text-xs text-[#666666] ">
                    <MessagesSquare />
                    <p>15</p>
                  </div>
                  <div className=" flex justify-start items-center text-xs text-[#666666]">
                    <Paperclip />
                    <p>15</p>
                  </div>
                  <div className=" flex justify-start items-center text-xs text-[#666666]">
                    <CalendarDays />
                    <p>{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
