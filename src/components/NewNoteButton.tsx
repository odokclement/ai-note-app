"use client"
import { User } from '@supabase/supabase-js'
import React from 'react'
type Props = {
    user: User | null;
}
// This component is a button that allows the user to create a new note.
// It is currently empty and does not have any functionality.
// In the future, it will likely open a modal or redirect the user to a new note page.
// The user prop is passed in to check if the user is logged in or not.

const NewNoteButton = ({user}:Props) => {
    console.log(user?.email)
  return (
    <div>
      New Note Button
    </div>
  )
}

export default NewNoteButton;
