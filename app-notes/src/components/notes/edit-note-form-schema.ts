import { z } from "zod";

export const editNoteFormSchema = z.object({
  title: z
    .string({
      message: "O título é obrigatório",
    })
    .min(1, { message: "O título deve ter pelo menos 1 caractere" })
    .max(255, { message: "O título deve ter no máximo 255 caracteres" }),
  content: z
    .string({
      message: "O conteúdo é obrigatório",
    })
    .min(1, { message: "O conteúdo deve ter pelo menos 1 caractere" })
    .max(1000, {
      message: "O conteúdo deve ter no máximo 1000 caracteres",
    }),
});

export type EditNoteFormValues = z.infer<typeof editNoteFormSchema>;
