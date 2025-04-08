"use client"
import React from 'react'

// This component is a text input field for adding notes.
type Props = {
    noteId: string;
    startingNoteText: string;
}
// It is currently empty and does not have any functionality.

function NoteTextInput({ noteId, startingNoteText }: Props) {
  // The noteId prop is passed in to identify the note being edited.
  return (
    <div>NoteTextInput</div>
  )
}

export default NoteTextInput;