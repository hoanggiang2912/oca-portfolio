"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export function AuthStatus() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session ? (
    <div>
      <span>Logged in as {session.user.email}</span>
      <a href="/logout">Sign out</a>
    </div>
  ) : (
    <div>
      <a href="/login">Log in</a>
      <a href="/signup">Sign up</a>
    </div>
  );
}
