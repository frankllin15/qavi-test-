import { ArchiveX } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { Header } from "~/components/header";
import { AddNote } from "~/components/notes/add-note";
import { NoteCard } from "~/components/notes/note-card";
import { NoteSkeleton } from "~/components/notes/note-skeleton";
import { api } from "~/utils/api";


export default function PageHome() {

  return (
    <div className="min-h-screen bg-neutral-900 px-3 md:px-12 lg:px-0">
      <PageHead />
      <Header />
      <PageContent />
    </div >
  );
}


const PageHead = () => (
  <Head>
    <title>Notes App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Crie e gerencie suas notas" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);


const PageContent = () => {
  const { data: sessionData } = useSession();
  const { data: notes, isLoading, isError } = api.note.getNotes.useQuery();

  return (
    <div
      className="w-full mx-auto lg:max-w-xl mt-12 pb-12"
    >

      {
        sessionData ? (
          <div className="space-y-8">
            <AddNote />

            <div className=" space-y-3">
              <h2 className="text-white text-2xl">
                Minhas notas
              </h2>
              <div className="flex flex-col relative gap-2">
                {
                  isError && (
                    <div className="bg-red-600/10 p-4 rounded-lg">
                      <p className="text-red-600">
                        Ocorreu um erro ao carregar suas notas
                      </p>
                    </div>
                  )
                }
                {
                  isLoading && (
                    Array.from({ length: 2 }).map((_, index) => (
                      <NoteSkeleton key={index} />
                    )))
                }
                {
                  notes?.length === 0 && (
                    <div className="flex flex-col gap-2 items-center justify-center bg-white/10 p-4 rounded-lg">
                      <ArchiveX className="h-16 w-16 text-white" />
                      <p className="text-white text-xl">
                        Você ainda não tem notas
                      </p>
                    </div>
                  )
                }
                {notes?.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-center items-center gap-4 py-16">
            <h2 className="text-white text-5xl mb-12">
              Bem-vindo ao App Notes
            </h2>
            <p className="text-white text-lg text-center">
              Faça login para começar
            </p>
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => void signIn()}
            >
              Acesse agora
            </button>
          </div>
        )
      }
    </div>
  )
}



