import { AuthForm } from "@/components/auth/AuthForm";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (!error) window.location.href = "/verify-email";
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <AuthForm type="signup" onSubmit={handleSubmit} />
    </div>
  );
}
