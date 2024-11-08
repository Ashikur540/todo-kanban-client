//  a modal to add or edit a todo
import { useState } from "react";

import { Paperclip, Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  // DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../../components/ui/dialog";

import TodoAttachmentUploader from "./TodoAttachmentUploader";
import { Input } from "../../components/ui/input";
import axiosInstance from "../../lib/axios";
import { toast } from "sonner";
import { AxiosError, isAxiosError } from "axios";

type TodoManagerModalProps = {
  todoId?: string;
  modalType?: "add" | "edit";
};

export function TodoManagerModal({
  todoId,
  modalType = "add",
}: TodoManagerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const [todo, setTodo] = useState<string | null>(null);

  const btnText = modalType === "edit" ? "Save Changes" : "Add New Todo";

  const handleSubmit = async () => {
    const formData = new FormData();

    // Append todo text with the exact key your backend expects
    formData.append("todo", todo || "");

    // Append files with the exact key name matching your multer config
    if (files?.length) {
      files.forEach((file) => {
        formData.append("attachments_files", file);
      });
    }

    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/todos/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(
        "✨ ~ file: todoManagerModal.tsx:55 ~ handleSubmit ~ res:",
        res.data
      );

      toast.success("Todo created successfully");
      setFiles(null);
      setTodo(null);
      setIsOpen(false);
      setIsLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        const err = error as AxiosError;
        const errorMessage = err.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
        setIsLoading(false);
        return;
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        {modalType === "edit" ? (
          <Button variant="ghost" className="flex gap-1">
            <Paperclip className="text-[#666666]" />
            <span className="text-[#666666]">12</span>
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
            {modalType === "edit" && todoId}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <label htmlFor="todo" className="text-sm">
            📝 Todo:
          </label>
          <Input
            placeholder="Enter todo"
            name="todo"
            onChange={(e) => setTodo(e.target.value.trim())}
          />
        </div>
        <label htmlFor="attachments" className="text-sm">
          🧷 Add attachments:
        </label>
        <TodoAttachmentUploader files={files} setFiles={setFiles} />
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Saving..." : btnText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
