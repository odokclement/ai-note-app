"use client";
import { User } from "@supabase/supabase-js";
import React from "react";

type Props = {
  user: User | null;
};

function AskAIButton({ user }: Props) {
  console.log(user?.email);
  return <div>AskAIbutton</div>;
}

export default AskAIButton;
