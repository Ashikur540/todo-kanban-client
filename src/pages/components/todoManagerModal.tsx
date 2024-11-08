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

type TodoManagerModalProps = {
  todoId?: string;
  modalType?: "add" | "edit";
};

export function TodoManagerModal({
  todoId,
  modalType = "add",
}: TodoManagerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [files, setFiles] = useState<File[] | null>(null);
  const [todo, setTodo] = useState<string | null>(null);
  console.log(files, todo);
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
