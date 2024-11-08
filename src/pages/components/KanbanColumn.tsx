import React from "react";
import { capitalizeFirstLetter } from "../../lib/utils";

type KanbanColumnProps = {
  children: React.ReactNode;
  column: {
    title: string;
    total: number;
  };
};

const KanbanColumn = ({ children, column }: KanbanColumnProps) => {
  return (
    <>
      <div
        className={`flex-shrink-0 max-w-[400px] min-w-[340px] w-full h-[100vh] bg-gray-100 rounded-lg shadow-lg`}
      >
        <div className="p-4 font-semibold text-lg border-b flex justify-between gap-4 items-center">
          <p>{capitalizeFirstLetter(column.title)}</p>
          <div className="bg-gray-200 rounded-md text-lg h-9 w-9 flex justify-center items-center flex-shrink-0">
            <p className="text-sm text-gray-500 p-1 font-bold">
              {column?.total}
            </p>
          </div>
        </div>
        <div className="overflow-y-auto h-full p-2 space-y-4">
          {/* cards goes here  */}
          {children}
        </div>
      </div>
    </>
  );
};

export default KanbanColumn;
