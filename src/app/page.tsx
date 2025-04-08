import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import  AskAIButton from "@/components/AskAIButton";
import  NewNoteButton  from "@/components/NewNoteButton";
import NoteTextInput from "@/components/NoteTextInput";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const noteIdParam = resolvedSearchParams.noteId;
  const user = await getUser();

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

    const note = await prisma.notes.findUnique({
      where: {
        id: noteId, authorId: user?.id,
      },  
    });
  return (
    <div className="flex h-full items-center flex-col gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-4">
         <AskAIButton  user ={user}/>
         <NewNoteButton user ={user}/>
      </div>
      <NoteTextInput noteId ={noteId} startingNoteText={note?.text || ""}/>
    </div>
  );
}
