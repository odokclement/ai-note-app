"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LogOutAction } from "@/actions/users";

const LogoutButton = () => {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handlelogout = async() => {
    setLoading(true);
    const {errorMessage} = await LogOutAction();
    
    if(!errorMessage){
        toast.success("Logged out successfully");
        router.push("/");
    } else {
        toast.error(errorMessage);
    }
    setLoading(false);
  };
  return (
    <Button className="w-24" variant={"outline"} onClick={handlelogout} disabled={loading}>
      {" "}
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}{" "}
    </Button>
  );
};

export default LogoutButton;
