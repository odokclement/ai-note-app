"use client";

import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import {  LoginAction, signUpAction } from "@/actions/users";

type Props = {
  types: "login" | "signup";
};

const AuthForm = ({ types }: Props) => {
  const isLoginForm = types === "login";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;
      let title;
      let description;

      if (isLoginForm) {
        errorMessage = (await LoginAction(email, password)).errorMessage;
        title = "Logged in";
        description = "You have been successfully logged in";
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        title = "Signed up";
        description = "Check your email for the confirmation link";
      }

      if (!errorMessage) {
        toast("signed up successfully  check your email for confirmation");
        router.replace("/");
      } else {
        toast("Failed to log in");
      }
    });
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className=" mt-4 flex flex-col gap-6">
        <Button className=" w-full">
          {isPending ? (
            <Loader2 className=" animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "sign up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Don't have an account yet?" : "Already have an account?"}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 underline${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "sign up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;


