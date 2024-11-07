import React from "react";

type KanbanColumnProps = {
  children: React.ReactNode;
  column: {
    title: string;
  };
};

const KanbanColumn = ({ children, column }: KanbanColumnProps) => {
  return (
    <>
      <div
        className={`flex-shrink-0 max-w-[400px] min-w-[320px] h-[100vh] bg-gray-100 rounded-lg shadow-lg`}
      >
        <div className="p-4 font-semibold text-lg border-b flex justify-between gap-4 items-center">
          <p>{column.title}</p>
          <div className="bg-gray-200 rounded-md text-lg h-9 w-9 flex justify-center items-center flex-shrink-0">
            <p className="text-sm text-gray-500 p-1 font-bold">12</p>
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
