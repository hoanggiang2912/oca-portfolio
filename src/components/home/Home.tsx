"use client";

// src/app/page.tsx
import { updateUrl } from "@/utils/utils";
import { ArrowRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      <div className="prose prose-invert max-w-none py-6 space-y-4">
        <h1 className="h1"># 👋 Hello World</h1>
        <p className="text-base">
          I'm <span className="text-drac-cyan"> Oca</span> - a passionate
          developer building digital experiences with:
        </p>
        <p className="text-base">
          I came up with the idea of creating a VS-Code theme website from
          nowhere. Haha, did you really expect me to remember that? LOL
        </p>
        <div className="flex items-center">
          <Button
            className="font-bold"
            onClick={() => updateUrl(searchParams.toString(), "about-me")}
          >
            About me <ArrowRightIcon />
          </Button>
          {/* <Link href={"?page=about-me"}>
          </Link> */}
          <Button
            variant={"outline"}
            className="hover:bg-muted hover:text-white ml-3"
          >
            Contact me now
          </Button>
        </div>
      </div>
    </div>
  );
}
