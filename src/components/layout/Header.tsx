"use client";

import { capitalize } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Header() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") as string;

  return (
    <div className="w-full flex items-center h-10 px-4 bg-background shadow-md relative z-10">
      <div className="flex space-x-2">
        <span className="w-3 h-3 rounded-full bg-drac-red inline-block hover:brightness-90 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-drac-yellow inline-block hover:brightness-90 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-drac-green inline-block hover:brightness-90 cursor-pointer"></span>
      </div>
      <span className="ml-6 text-base">{`${capitalize(page)}.md - Oca's Portfolio`}</span>
    </div>
  );
}
