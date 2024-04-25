import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

import { DeleteNoteDialog } from "./delete-note";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { EditNoteDialog } from "./edit-note";

type RouterOutput = inferRouterOutputs<AppRouter>;
type Note = RouterOutput["note"]["getNotes"][number];


type NoteCardProps = {
  note: Note;

}
export const NoteCard = ({ note }: NoteCardProps) => {

  return (
    <div className="bg-white/10 p-4 rounded-lg mt-4 space-y-4">
      <div className="flex justify-between gap-3 items-center">
        <div>
          <h2 className="text-lg text-white">{note.title}</h2>
          <p className="text-gray-400 text-sm">
            {formatRelative(new Date(note.createdAt), new Date(), { locale: ptBR })}
          </p>
        </div>
        <div className="flex">
          <EditNoteDialog note={note} />
          <DeleteNoteDialog note={note} />
        </div>
      </div>
      <p className="text-white">{note.content}</p>
    </div>
  )
}

