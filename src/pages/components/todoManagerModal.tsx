//  a modal to add or edit a todo

import { Paperclip } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../../components/ui/dialog";
// import IconWithText from "./IconWithText";
import { useState } from "react";

type TodoManagerModalProps = {
  todoId: string;
};

export function TodoManagerModal({ todoId }: TodoManagerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex gap-1">
          <Paperclip className="text-[#666666]" />
          <span className="text-[#666666]">12</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile {todoId}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done. Make
            changes to your profile here. Click save when you're done. Make
            changes to your profile here. Click save when you're done. Make
            changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">This is a modal</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
