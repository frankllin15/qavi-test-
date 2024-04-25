import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { api } from "~/utils/api";
import type { Note } from "~/types/note";
import { Trash2 } from "lucide-react";
import { useToast } from "../ui/use-toast";


type Props = {
  note: Note;

}

export const DeleteNoteDialog = ({ note }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const utils = api.useUtils();
  const { toast } = useToast();
  const { mutate } = api.note.deleteNote.useMutation({
    onError: (error) => {
      toast({ title: "Erro ao deletar nota", description: error.message, variant: "destructive" });
    },
    onSuccess: () => {
      void utils.note.getNotes.invalidate();
      setIsOpen(false);

      toast({ title: "Nota deletada com sucesso", duration: 2000 });
    }
  });

  const handleDelete = () => {
    mutate(note.id);
  }

  const handleOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  }

  return (
    <Dialog
      onOpenChange={handleOpenChange}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <Button title="Deletar nota" variant="ghost" className="hover:bg-red-500/10">
          <Trash2 className="h-6 w-6 text-red-700" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Deletar nota
          </DialogTitle>
          <DialogDescription>
            Tem certeza que deseja deletar a nota?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4">
          <Button
            onClick={handleDelete}
            variant="destructive"
          >
            Deletar
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsOpen(false)}

          >
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog >
  )
}