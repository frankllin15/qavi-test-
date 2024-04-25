import { api } from "~/utils/api";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader2, PenBox } from "lucide-react";
import type { Note } from "~/types/note";
import { type EditNoteFormValues, editNoteFormSchema } from "./edit-note-form-schema";
import { useToast } from "../ui/use-toast";


type Props = {
  note: Note;
}

export const EditNoteDialog = ({ note }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const utils = api.useUtils();
  const { toast } = useToast();

  const { mutate, isPending } = api.note.updateNote.useMutation({
    onError: (error) => {
      toast({ title: "Erro ao editar nota", description: error.message, variant: "destructive" });
    },
    onSuccess: () => {
      void utils.note.getNotes.invalidate();
      toast({ title: "Nota editada com sucesso", variant: "success", duration: 2000 });

      setIsOpen(false);
    }
  });

  const form = useForm<EditNoteFormValues>({
    resolver: zodResolver(editNoteFormSchema),
    defaultValues: {
      title: note.title,
      content: note.content,
    },
  })

  const handleEdit = (data: EditNoteFormValues) => {

    mutate({ id: note.id, title: data.title, content: data.content });
  }

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen && !form.formState.isSubmitted) {

      form.reset();
    }

    setIsOpen(isOpen);
  }

  return (
    <Dialog
      onOpenChange={handleOpenChange}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <Button title="Editar nota" variant="ghost" className="hover:bg-blue-500/10">
          <PenBox className="h-6 w-6 text-blue-700" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Editar nota
          </DialogTitle>
          <DialogDescription>
            Edite o título e o conteúdo da nota
          </DialogDescription>
        </DialogHeader>
        <Form
          {...form}
        >
          <form onSubmit={
            form.handleSubmit(handleEdit)
          } className="flex flex-col gap-4">


            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Título da nota"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Conteúdo
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Conteúdo da nota"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  disabled={isPending}
                  variant="outline"
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                disabled={isPending}
                type="submit"

              >
                {
                  isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  )
                    :
                    "Salvar"
                }

              </Button>
            </DialogFooter>

          </form>
        </Form>
      </DialogContent>
    </Dialog >
  )
}
