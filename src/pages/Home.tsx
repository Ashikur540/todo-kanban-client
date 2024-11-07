import { kanbanData } from "../constants";
import KanbanColumn from "./components/KanbanColumn";
import KanbanCard from "./components/KanbanCard";

const KanbanBoard = () => {
  return (
    <div className="flex  space-x-4 p-4">
      {kanbanData.map((column, index) => (
        <KanbanColumn key={index} column={column}>
          {column.items.map((item, idx) => (
            <KanbanCard todo={item} key={idx} />
          ))}
        </KanbanColumn>
      ))}
    </div>
  );
};

export default KanbanBoard;
