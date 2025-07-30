"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full py-8 bg-background/10">
      <Loader2 className="w-8 h-8 animate-spin text-drac-purple" />
    </div>
  );
}
