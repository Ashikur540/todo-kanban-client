import { kanbanData } from "../constants";
import KanbanColumn from "./components/KanbanColumn";
import KanbanCard from "./components/KanbanCard";
import { Button } from "../components/ui/button";
import { TodoManagerModal } from "./components/TodoManagerModal";

const KanbanBoard = () => {
  return (
    <section className="p-4">
      <TodoManagerModal todoId="125" />
      <div className="flex  space-x-4 ">
        {kanbanData.map((column, index) => (
          <KanbanColumn key={index} column={column}>
            {column.items.map((item, idx) => (
              <KanbanCard todo={item} key={idx} />
            ))}
          </KanbanColumn>
        ))}
      </div>
    </section>
  );
};

export default KanbanBoard;
