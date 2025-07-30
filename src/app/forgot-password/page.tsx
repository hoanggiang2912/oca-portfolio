import { AuthForm } from "@/components/auth/AuthForm";
import { supabase } from "@/lib/supabase";

export default function ForgotPassword() {
  const handleSubmit = async ({ email }: { email: string }) => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/reset-password`,
    });
    alert("Password reset link sent!");
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <AuthForm type="reset" onSubmit={handleSubmit} />
    </div>
  );
}
