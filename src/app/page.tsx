"use client";

import "@/app/_styles/globals.css";
import dynamic from "next/dynamic";
import Loading from "./loading";
const FileTabs = dynamic(() => import("@/components/home/FileTabs"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen font-mono flex flex-center relative">
      <div className="abs-full">
        <FileTabs />
      </div>
    </main>
  );
}
