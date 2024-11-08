//  a modal to add or edit a todo
import { useState } from "react";

import { Paperclip, Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
} from "../../components/ui/dialog";

import TodoAttachmentUploader from "./TodoAttachmentUploader";
import { Input } from "../../components/ui/input";
import axiosInstance from "../../lib/axios";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { TodoType } from "../../types";
import { extractFilename } from "../../lib/utils";

type TodoManagerModalProps = {
  todoData?: TodoType;
  modalType?: "add" | "edit";
};

export function TodoManagerModal({
  todoData,
  modalType = "add",
}: TodoManagerModalProps) {
  const btnText = modalType === "edit" ? "Save Changes" : "Add New Todo";
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const [todo, setTodo] = useState(todoData?.todo || "");

  // Initialize todo state when todoData changes
  // useEffect(() => {
  //   if (todoData) {
  //     setTodo(todoData.todo);
  //   }
  // }, [todoData]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("todo", todo);

    if (files?.length) {
      files.forEach((file) => {
        formData.append("attachments_files", file);
      });
    }

    try {
      setIsLoading(true);

      if (modalType === "edit" && todoData?._id) {
        await axiosInstance.patch(`/todos/${todoData?._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axiosInstance.post("/todos/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      toast(
        `Todo ${modalType === "edit" ? "updated" : "created"} successfully`,
        {
          action: {
            label: "Refresh",
            onClick: () => window.location.reload(),
          },
        }
      );

      setFiles(null);
      setTodo("");
      setIsOpen(false);
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        {modalType === "edit" ? (
          <Button variant="ghost" className="flex gap-1">
            <Paperclip className="text-[#666666]" />
            <span className="text-[#666666]">
              {todoData?.attachments?.length ?? 0}
            </span>
          </Button>
        ) : (
          <Button className="flex gap-1">
            <Plus />
            <span>Add New Todo</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[620px]">
        <DialogHeader>
          <DialogTitle>
            {modalType === "edit" ? "Edit" : "Add"} Todo{" "}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <label htmlFor="todo" className="text-sm">
            📝 Todo:
          </label>
          <Input
            placeholder="Enter todo"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {modalType === "add" && (
            <p className="text-sm text-gray-500">Status is "Todo" by default</p>
          )}
        </div>
        <label htmlFor="attachments" className="text-sm">
          🧷 Add attachments:
        </label>
        <TodoAttachmentUploader files={files} setFiles={setFiles} />

        <div className="flex flex-col">
          {todoData?.attachments &&
            todoData?.attachments?.map((attachment) => (
              <div key={todoData?._id} className="flex items-center gap-2">
                <Paperclip className="text-[#666666]" />
                <a
                  href={attachment}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#666666]"
                >
                  {extractFilename(attachment)}
                </a>
              </div>
            ))}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Saving..." : btnText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
