import { api } from "~/utils/api";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { addNoteFormSchema, type AddNoteFormValues } from "./add-note-form-schema";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";


export const AddNote = () => {
  const utils = api.useUtils();
  const form = useForm<AddNoteFormValues>({
    resolver: zodResolver(addNoteFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  const { toast } = useToast()

  const { mutate } = api.note.createNote.useMutation({
    onError: (error) => {
      toast({ title: "Erro ao criar nota", description: error.message, variant: "destructive", })
    },
    onSuccess: async () => {
      void utils.note.getNotes.invalidate();
      toast({ title: "Nota criada com sucesso", variant: "success" })
      form.reset();
    }
  });

  const handleSubmit = (
    data: AddNoteFormValues,
  ) => {

    mutate(data);
  }
  return (
    <div className="bg-white/10 p-4 rounded-lg mt-4 ">
      <h2 className="text-lg text-white">Adicionar nota</h2>
      <Form {...form}>
        <form
          onSubmit={
            form.handleSubmit(handleSubmit)
          }
          className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-100">Título</FormLabel>
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
                <FormLabel className="text-neutral-100">
                  Conteúdo
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Conteúdo da nota"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="bg-white/10 p-2 rounded-lg text-white"
          >
            Adicionar
          </button>
        </form>
      </Form>

    </div>
  )
}