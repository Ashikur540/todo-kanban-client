import { CalendarDays, MessagesSquare } from "lucide-react";
import { genRandomNum } from "../../lib/utils";
import IconStackFill from "../../components/icons/IconStackFill";
import IconClipboardList from "../../components/icons/IconClipboardFill";
import AvatarWithName from "./AvatarWithName";
import IconWithText from "./IconWithText";
import { TodoManagerModal } from "./TodoManagerModal";
import { TodoType } from "../../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

type KanbanCardProps = {
  todo: TodoType;
};
const KanbanCard = ({ todo }: KanbanCardProps) => {
  return (
    <>
      <div
        className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-500 cursor-move  flex-shrink-0 "
        // tabIndex="0"
      >
        <div className="flex justify-between items-center gap-4">
          <AvatarWithName />
          <AvatarWithName />
        </div>
        {/* todo details */}
        <div className="flex justify-between items-center gap-4">
          <div className="inline-flex justify-start items-center gap-2 mb-2">
            <IconStackFill className="text-[#666666] flex-shrink-0" />
            <p className="text-gray-600 text-sm">
              {todo.todo && todo.todo.length > 20
                ? todo.todo.slice(0, 24)
                : todo.todo}
              ...
            </p>
          </div>
          <div className=" justify-start items-center gap-2 mb-2 bg-gray-200 p-1 rounded-sm inline-flex">
            <IconClipboardList className="text-[#666666] flex-shrink-0" />
            <p className="text-gray-600 text-sm">1/2</p>
          </div>
        </div>

        <div className="flex justify-stretch items-center gap-3">
          <img
            src={`https://randomuser.me/api/portraits/men/${genRandomNum(
              1,
              40
            )}.jpg`}
            alt={`user-image`}
            className="w-7 h-7 rounded-full"
          />
          <img
            src={`https://randomuser.me/api/portraits/men/${genRandomNum(
              1,
              40
            )}.jpg`}
            alt={`user-image`}
            className="w-7 h-7 rounded-full"
          />
          <div className="bg-slate-200 text-xs h-8 w-8 rounded-full font-semibold text-gray-500 text-center flex justify-center items-center flex-shrink-0">
            <p>12+</p>
          </div>

          <IconWithText
            icon={<MessagesSquare className="h-5 w-5" />}
            text="15"
          ></IconWithText>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <TodoManagerModal todoData={todo} modalType="edit" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit todo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <IconWithText
            icon={<CalendarDays className="h-5 w-5" />}
            text={new Date(todo.createdAt).toLocaleDateString()}
          ></IconWithText>
        </div>
      </div>
    </>
  );
};

export default KanbanCard;
