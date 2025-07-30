"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function AuthForm({
  type,
  onSubmit,
}: {
  type: "signin" | "signup" | "reset";
  onSubmit: (data: { email: string; password?: string }) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register("email")} type="email" placeholder="Email" />
      {type !== "reset" && (
        <input
          {...form.register("password")}
          type="password"
          placeholder="Password"
        />
      )}
      <button type="submit">
        {type === "signin"
          ? "Sign In"
          : type === "signup"
            ? "Sign Up"
            : "Reset Password"}
      </button>
    </form>
  );
}
