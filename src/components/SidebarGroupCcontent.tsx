"use client"
import { Notes } from '@prisma/client'
import React from 'react'

type Props ={
    notes: Notes[];
}

function SidebarGroupCcontent({notes}: Props) {
    console.log(notes)
  return (
    <div>Your notes</div>
  )
}

export default SidebarGroupCcontent