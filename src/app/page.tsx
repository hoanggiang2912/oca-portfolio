"use client";

import "@/app/_styles/globals.css";
import FileTabs from "@/components/home/FileTabs";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen font-mono flex flex-center relative">
      <div className="abs-full">
        <FileTabs />
      </div>
    </main>
  );
}
